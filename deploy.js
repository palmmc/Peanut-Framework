/**
 * @deployment
 * Running this script or deploy.bat will recursively copy built packs to their respective folders for testing.
 *
 * Deployment can be configured by creating a `config.yaml` file in your root directory.
 *
 *  - CONFIGURATION OPTIONS:
 *      - behaviorPackSource [source path to deploy from, defaults to './behavior_packs']
 *      - resourcePackSource [source path to deploy from, defaults to './resource_packs']
 *      - behaviorPackTarget [target path to deploy to, defaults to '%LOCALAPPDATA%.../development_behavior_packs']
 *      - resourcePackTarget [target path to deploy to, defaults to '%LOCALAPPDATA%.../development_resource_packs']
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

async function copyAddonPacks() {
  let config;

  try {
    // Parse custom configuration for deployment.
    if (fs.existsSync("config.yaml")) {
      const configFile = fs.readFileSync("config.yaml", "utf8");
      config = yaml.load(configFile);

      for (const key in config) {
        if (typeof config[key] === "string") {
          config[key] = config[key].trim();
        }
      }
    }

    let behaviorPackSource = config?.behaviorPackSource ?? "./behavior_packs";
    let resourcePackSource = config?.resourcePackSource ?? "./resource_packs";
    let behaviorPackTarget =
      config?.behaviorPackTarget ??
      process.env.LOCALAPPDATA +
        "\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs";
    let resourcePackTarget =
      config?.resourcePackTarget ??
      process.env.LOCALAPPDATA +
        "\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_resource_packs";

    // File functions
    async function deleteDirectory(dirPath) {
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
          const curPath = path.join(dirPath, file);
          if (fs.lstatSync(curPath).isDirectory()) {
            await deleteDirectory(curPath);
          } else {
            fs.unlinkSync(curPath);
          }
        }
        fs.rmdirSync(dirPath);
      }
    }

    async function copyDirectory(src, dest) {
      fs.mkdirSync(dest, { recursive: true });
      const entries = fs.readdirSync(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          await copyDirectory(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    // Process behavior pack
    if (fs.existsSync(behaviorPackSource)) {
      const behaviorSubfolders = fs
        .readdirSync(behaviorPackSource, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      for (const subfolder of behaviorSubfolders) {
        const targetSubfolder = path.join(behaviorPackTarget, subfolder);
        if (fs.existsSync(targetSubfolder)) {
          console.log(
            `\x1b[33mOutdated version found: \x1b[0mBP ${path.basename(
              targetSubfolder
            )}. Removing...`
          );
          await deleteDirectory(targetSubfolder);
        }
      }
      try {
        await copyDirectory(behaviorPackSource, behaviorPackTarget);
      } catch (e) {
        console.log(
          "\x1b[91mError: \x1b[0mFailed to copy directory.\n\x1b[96mCheck your configuration paths."
        );
        return;
      }
    }

    // Process resource pack
    if (fs.existsSync(resourcePackSource)) {
      const resourceSubfolders = fs
        .readdirSync(resourcePackSource, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      for (const subfolder of resourceSubfolders) {
        const targetSubfolder = path.join(resourcePackTarget, subfolder);
        if (fs.existsSync(targetSubfolder)) {
          console.log(
            `\x1b[33mOutdated version found: \x1b[0mRP ${path.basename(
              targetSubfolder
            )}. Removing...`
          );
          await deleteDirectory(targetSubfolder);
        }
      }
      try {
        await copyDirectory(resourcePackSource, resourcePackTarget);
      } catch (e) {
        console.log(
          "\x1b[91mError: \x1b[0mFailed to copy directory.\n\x1b[96mCheck your configuration paths."
        );
        return;
      }
    }

    console.log("\x1b[94mDeployment successful!\x1b[0m");
  } catch (error) {
    console.log("\x1b[91mError: \x1b[0mSomething went wrong.");
    console.log(error);
  }
}

copyAddonPacks();
