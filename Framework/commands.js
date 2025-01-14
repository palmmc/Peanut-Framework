#!/usr/bin/env node

const { spawn } = require("child_process");
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "build":
    if (!args[1]) {
      console.log(
        "\x1b[94mUsage: \x1b[33mpeanut \x1b[0mbuild \x1b[91m<path to project directory>\x1b[0m"
      );
      return;
    }
    runCommand(`gulp build_project --${args[2]} --no-deprecation`);
    break;
  case "watch":
    if (!args[1]) {
      console.log(
        "\x1b[94mUsage: \x1b[33mpeanut \x1b[0mwatch \x1b[91m<path to project directory>\x1b[0m"
      );
      return;
    }
    runCommand(`gulp watch_scripts --${args[2]} --no-deprecation`);
    break;
  case "deploy":
    runCommand(`gulp deploy_packs --no-deprecation`);
    break;
  case "reload":
    if (!args[1]) {
      console.error(
        "\x1b[91mError: \x1b[0mProject path must be passed as an argument.\x1b[0m"
      );
      console.error(
        "\x1b[94mUsage: \x1b[33mpeanut \x1b[0mreload \x1b[91m<path to project directory>\x1b[0m"
      );
      return;
    }
    runCommand(`node ./plugins.js ${args[1]}`);
    break;
  default:
    console.log(
      "\x1b[94mValid Commands:\x1b[0m\n  - \x1b[33mpeanut \x1b[0mbuild \x1b[94m<path to project directory>\x1b[0m\n  - \x1b[33mpeanut \x1b[0mdeploy\x1b[0m\n  - \x1b[33mpeanut \x1b[0mreload \x1b[94m<path to project directory>\x1b[0mt\n  - \x1b[33mpeanut \x1b[0mwatch \x1b[94m<path to project directory>\x1b[0m"
    );
}

function runCommand(command, args = []) {
  spawn(command, args, { stdio: "inherit", shell: true });
}
