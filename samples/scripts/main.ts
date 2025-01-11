// Run `gulp build` in your terminal to build scripts folder.
// Run `gulp watch` in your terminal to begin a watch task.

import { world } from "@minecraft/server";
world.afterEvents.playerSpawn.subscribe((data) => {
  data.player.sendMessage("Hello Peanut!");
});
