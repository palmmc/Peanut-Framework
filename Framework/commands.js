#!/usr/bin/env node

const { spawn } = require("child_process");
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "build":
    if (!args[1]) {
      console.log(
        "\x1b[94mUsage: \x1b[33mpeanut \x1b[0mbuild \x1b[91m<path to script>\x1b[0m"
      );
      return;
    }
    runCommand("tsx", ["--no-deprecation", args[1]]);
    break;
  case "watch":
    if (!args[1]) {
      console.log(
        "\x1b[94mUsage: \x1b[33mpeanut \x1b[0mwatch \x1b[91m<path to script>\x1b[0m"
      );
      return;
    }
    runCommand("tsx", ["--watch", args[1]]);
    break;
  case "deploy":
    runCommand(`node ./deploy.js`);
    break;
  default:
    console.log("Command not recognized.");
}

function runCommand(command, args = []) {
  spawn(command, args, { stdio: "inherit", shell: true });
}
