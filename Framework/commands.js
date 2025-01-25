#!/usr/bin/env node

const { spawn } = require("child_process");
const args = process.argv.slice(2);
const command = args[0];

/**
 * Command-line utility for managing project build, deployment, and watch tasks.
 * Supports commands for building, watching, deploying, and reloading project scripts.
 * 
 * @example
 * peanut build <path to project directory> - Builds the project at the specified path.
 * peanut watch <path to project directory> - Watches the project directory for changes.
 * peanut deploy - Deploys the project packs.
 * peanut reload <path to project directory> - Reloads the project scripts at the specified path.
 */
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
      "\x1b[94mValid Commands:\x1b[0m\n  - \x1b[33mpeanut \x1b[0mbuild \x1b[94m<path to project directory>\x1b[0m\n  - \x1b[33mpeanut \x1b[0mdeploy\x1b[0m\n  - \x1b[33mpeanut \x1b[0mreload \x1b[94m<path to project directory>\x1b[0m\n  - \x1b[33mpeanut \x1b[0mwatch \x1b[94m<path to project directory>\x1b[0m"
    );
}

/**
 * Executes a shell command with the provided arguments and logs the output to the console.
 *
 * @param {string} command - The command to execute.
 * @param {string[]} [args=[]] - An array of arguments to pass to the command.
 */
function runCommand(command, args = []) {
  spawn(command, args, { stdio: "inherit", shell: true });
}
