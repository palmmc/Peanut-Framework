/**
 * @deployment
 * Deployment can be configured by creating a `config.yaml` file in your root directory.
 *
 *  - CONFIGURATION OPTIONS:
 *      - behaviorPackSource [source path to deploy from, defaults to './behavior_packs']
 *      - resourcePackSource [source path to deploy from, defaults to './resource_packs']
 *      - behaviorPackTarget [target path to deploy to, defaults to '%LOCALAPPDATA%.../development_behavior_packs']
 *      - resourcePackTarget [target path to deploy to, defaults to '%LOCALAPPDATA%.../development_resource_packs']
 */

const fs = require("fs");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const path = require("path");
const sourcemaps = require("gulp-sourcemaps");
const { spawn, spawnSync } = require("child_process");
const { error } = require("console");

const sourceDir = process?.argv[3]?.slice(2);
const projectName = sourceDir?.slice(sourceDir?.lastIndexOf("/") + 1);
let targetBe = "./behavior_packs";
let targetRe = "./resource_packs";
let localBe =
  process.env.LOCALAPPDATA +
  "\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs";
let localRe =
  process.env.LOCALAPPDATA +
  "\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_resource_packs";

if (fs.existsSync("config.yaml")) {
  const configFile = fs.readFileSync("config.yaml", "utf8");
  config = yaml.load(configFile);
  targetBe = config?.behaviorPackSource;
  targetRe = config?.resourcePackSource;
  localBe = config?.behaviorPackTarget;
  localRe = config?.resourcePackTarget;
}

function compile_scripts() {
  return gulp
    .src(sourceDir + "/scripts/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(
      ts({
        module: "es2020",
        moduleResolution: "node",
        lib: ["es2020", "dom"],
        strict: true,
        target: "es2020",
        noImplicitAny: true,
      })
    )
    .pipe(gulp.dest(targetBe + "/" + projectName + "/scripts/"));
}

async function build_project() {
  const files = await new Promise((resolve, reject) => {
    const foundFiles = [];
    gulp
      .src(
        [
          sourceDir + "/**/*.ts",
          `!${sourceDir + "/scripts/**/*.ts"}`,
          `!${sourceDir + "/plugins/**/*.ts"}`,
        ],
        { read: false }
      )
      .on("data", (file) => {
        foundFiles.push(file.path);
      })
      .on("end", () => resolve(foundFiles))
      .on("error", reject);
  });

  const spawnPromises = files.map((filePath) => {
    return new Promise((resolve, reject) => {
      const process = spawnSync("tsx", ["--no-deprecation", filePath], {
        stdio: "inherit",
        shell: true,
      });
      if (process.error) {
        console.log("\x1b[91mError:\x1b[0m " + process.error);
        reject();
      } else resolve();
    });
  });

  await Promise.all(spawnPromises);
}

function watch_scripts() {
  return gulp.watch(
    [sourceDir + "/scripts/**/*.ts", sourceDir + "/**/*"],
    gulp.series(
      build_project,
      compile_scripts,
      gulp.parallel(deploy_behavior_packs, deploy_resource_packs)
    )
  );
}

async function deploy_behavior_packs() {
  console.log("Deploying to '" + localBe + "'");
  return deploy_task(targetBe, localBe);
}

async function deploy_resource_packs() {
  console.log("Deploying to '" + localRe + "'");
  return deploy_task(targetRe, localRe);
}

async function deploy_task(sourceDir, targetDir) {
  await new Promise(async (resolve, reject) => {
    try {
      fs.mkdirSync(targetDir, { recursive: true });
      const entries = fs.readdirSync(sourceDir, {
        withFileTypes: true,
      });
      const folders = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);
      for (const folder of folders) {
        const srcPath = path.join(sourceDir, folder);
        const targetPath = path.join(targetDir, folder);
        if (fs.existsSync(targetPath)) {
          fs.rmdirSync(targetPath, { retryDelay: 500, recursive: true });
        }
        await copyRecursive(srcPath, targetPath);
      }
      resolve();
    } catch (err) {
      console.error("Error during deployment:", err);
      reject();
    }
  });
}

async function copyRecursive(source, target) {
  return await new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
      }
      const entries = fs.readdirSync(source, { withFileTypes: true });
      for (const entry of entries) {
        const srcPath = path.join(source, entry.name);
        const destPath = path.join(target, entry.name);
        if (entry.isDirectory()) {
          copyRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
      resolve();
    } catch (e) {
      console.error("Error during deployment:", err);
      reject();
    }
  });
}

exports.build_project = build_project;
exports.compile_scripts = compile_scripts;
exports.watch_scripts = watch_scripts;
exports.deploy_behavior_packs = deploy_behavior_packs;
exports.deploy_resource_packs = deploy_resource_packs;
exports.deploy_packs = gulp.parallel(
  deploy_behavior_packs,
  deploy_resource_packs
);
exports.default = gulp.series(compile_scripts, build_project);
