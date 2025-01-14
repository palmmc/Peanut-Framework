const fs = require("fs");
const path = require("path");
const peanutJson = require("peanut-framework/package.json");
const API_VERSION = peanutJson.api_version;
const FRAMEWORK_VERSION = peanutJson.version;
const yauzl = require("yauzl");

class Console {
  static logs = [];
  static log(text) {
    console.log(replaceMinecraftColorCodes(text));
  }
  static writeQueue() {
    console.log();
    this.logs.sort((a, b) => a.order - b.order);
    for (const t of this.logs) {
      let log = `[\x1b[30m${new Date().toLocaleTimeString([], {
        hour12: false,
      })}\x1b[0m] ${t.text}`;
      console.log(replaceMinecraftColorCodes(log));
    }
    console.log();
  }
  static queue = {
    log: (data, order) => {
      this.logs.push({
        text: replaceMinecraftColorCodes(data),
        order: order,
      });
    },
  };
}

function replaceMinecraftColorCodes(text) {
  const colorMap = {
    "§0": "30", // Black
    "§1": "34", // Dark Blue
    "§2": "32", // Dark Green
    "§3": "36", // Dark Aqua
    "§4": "31", // Dark Red
    "§5": "35", // Dark Purple
    "§6": "33", // Gold
    "§7": "37", // Gray
    "§8": "90", // Dark Gray
    "§9": "94", // Blue
    "§a": "92", // Green
    "§b": "96", // Aqua
    "§c": "91", // Red
    "§d": "95", // Light Purple
    "§e": "93", // Yellow
    "§f": "97", // White
    "§l": "1", // Bold
    "§m": "9", // Strikethrough
    "§n": "4", // Underline
    "§o": "3", // Italic
    "§r": "0", // Reset
  };

  let result = text;
  for (const key in colorMap) {
    if (colorMap.hasOwnProperty(key)) {
      // Use a regular expression to replace all occurrences
      result = result.replace(new RegExp(key, "g"), `\x1b[${colorMap[key]}m`);
    }
  }
  return result;
}

async function loadPlugins(projectDir) {
  try {
    // Check if project directory is valid
    try {
      await fs.promises.access(projectDir);
    } catch (error) {
      return Console.log(
        `\x1b[91mError: \x1b[0mInvalid directory.\n\x1b[90mVerify the path is correct.\x1b[0m`
      );
    }

    const pluginsDir = projectDir + "/plugins/";

    // Check for /plugins/ directory.
    try {
      await fs.promises.access(pluginsDir);
    } catch (error) {
      fs.mkdirSync(pluginsDir);
    }

    const files = await fs.promises.readdir(pluginsDir);

    // Extract plugins
    for (const file of files) {
      const filePath = path.join(pluginsDir, file);
      const ext = path.extname(file).toLowerCase();

      if (ext === ".zip" || ext === ".pfplugin") {
        await extractPluginArchive(filePath, pluginsDir);
      }
    }

    // Load plugin.json files
    const pluginFolders = await fs.promises.readdir(pluginsDir, {
      withFileTypes: true,
    });
    const loadedPlugins = [];
    const pluginNames = new Set();

    if (pluginFolders.length === 0) {
      return console.log("\x1b[90m\x1b[3mNo plugins were found.\x1b[0m");
    }

    for (const dirent of pluginFolders) {
      if (!dirent.isDirectory()) continue;

      const pluginFolder = path.join(pluginsDir, dirent.name);
      const pluginJsonPath = path.join(pluginFolder, "plugin.json");

      try {
        const pluginJsonContent = await fs.promises.readFile(
          pluginJsonPath,
          "utf8"
        );
        const plugin = JSON.parse(pluginJsonContent);

        // Check duplicates
        if (pluginNames.has(plugin.name)) {
          Console.queue.log(
            `\x1b[33mDuplicate found\x1b[0m: ${plugin.name}\n - \x1b[90mPlease prune other versions of this plugin.\x1b[0m`,
            2
          );
          continue;
        }
        pluginNames.add(plugin.name);

        // Validate API version
        if (plugin.api_version !== API_VERSION) {
          Console.queue.log(
            `\x1b[91mError loading \x1b[0m${plugin.name} \x1b[90mv${plugin.version}\x1b[91m: \x1b[0mMismatched API version \x1b[90m${plugin.api_version}\x1b[0m is incompatible with local version \x1b[94m${API_VERSION}\x1b[0m`,
            3
          );
          continue;
        }

        // Copy script API scripts
        const pluginScriptsDir = path.join(pluginFolder, "scripts");
        const projectScriptsDir = path.join(projectDir, "scripts");

        if (fs.existsSync(pluginScriptsDir)) {
          await copyScripts(pluginScriptsDir, projectScriptsDir);
        }

        loadedPlugins.push(plugin);
        Console.queue.log(
          `\x1b[35mLoaded \x1b[0m${plugin.name} \x1b[90mv${plugin.version}\x1b[0m by \x1b[35m${plugin.author}\x1b[0m for \x1b[94mPeanut v${FRAMEWORK_VERSION}\x1b[0m\n  - \x1b[90mdescription: \x1b[0m'${plugin.description}'`,
          1
        );
      } catch (err) {
        Console.queue.log(
          `\x1b[91mError reading or parsing plugin.json in \x1b[0m${pluginFolder}\x1b[91m: \x1b[0m${err}`,
          3
        );
      }
    }
  } catch (err) {
    Console.queue.log("\x1b[91mError loading plugins:\x1b[0m" + err, 3);
  }
  Console.writeQueue();
}

async function extractPluginArchive(filePath, pluginsDir) {
  return new Promise((resolve, reject) => {
    yauzl.open(filePath, { lazyEntries: true }, (err, zipfile) => {
      if (err) {
        reject(err);
        return;
      }

      zipfile.readEntry();

      zipfile.on("entry", (entry) => {
        const outputDir = path.join(
          pluginsDir,
          path.basename(filePath, path.extname(filePath))
        );
        const entryPath = path.join(outputDir, entry.fileName);

        if (/\/$/.test(entry.fileName)) {
          fs.mkdirSync(entryPath, { recursive: true });
          zipfile.readEntry();
        } else {
          fs.mkdirSync(path.dirname(entryPath), { recursive: true });

          zipfile.openReadStream(entry, (err, readStream) => {
            if (err) {
              reject(err);
              return;
            }
            readStream.on("end", () => {
              zipfile.readEntry();
            });
            const writeStream = fs.createWriteStream(entryPath);
            readStream.pipe(writeStream);
          });
        }
      });

      zipfile.on("end", async () => {
        try {
          await fs.promises.unlink(filePath);
        } catch (deleteErr) {
          Console.log(
            `\x1b[91mError deleting plugin archive from \x1b[0m'${filePath}'\x1b[91m:\x1b[0m`,
            deleteErr
          );
        }
        Console.queue.log(
          `\x1b[94mDecompiling plugin archive from \x1b[0m'${filePath}'\x1b[0m`,
          1
        );
        resolve();
      });

      zipfile.on("error", (err) => {
        reject(err);
      });
    });
  });
}

async function copyScripts(source, destination) {
  try {
    await fs.promises.mkdir(destination, { recursive: true });
    const entries = await fs.promises.readdir(source, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(source, entry.name);
      const destPath = path.join(destination, entry.name);
      if (entry.isDirectory()) {
        await copyScripts(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error(
      `\x1b[91mError copying scripts from \x1b[0m'${source}' \x1b[91mto \x1b[0m'${destination}'\x1b[91m:\x1b[0m`,
      err
    );
  }
}

const projectDir = process.argv[2];

if (!projectDir) {
  console.error(
    "\x1b[91mError: \x1b[0mProject path must be passed as an argument.\x1b[0m"
  );
  console.error(
    "\x1b[94mUsage: \x1b[33mpeanut \x1b[0mreload \x1b[91m<path to project directory>\x1b[0m"
  );
  process.exit(1);
}

loadPlugins(projectDir);
