import * as fs from "fs";
import { BlockSideKey } from "../../Types/types";
import { Benchmark, Console } from "../../Utilities/utils";
import { FORMAT_VERSION } from "../../version";

/**
 * BlockMap class used for generating block texture and sound mappings.
 *
 * This class generates a JSON file (`blocks.json`) containing texture and sound mappings for blocks.
 * Each block entry can specify textures for different sides, sound, and additional properties like isotropy.
 */
export class BlockMap {
  private projectId = "unknown";
  private data: any = {
    format_version: FORMAT_VERSION.BLOCKMAP,
  };

  /**
   * Adds entries to the block map.
   *
   * This method allows adding mappings for blocks, where each block can have various properties such as textures,
   * carried textures, sound, and isotropic settings. The textures can be specified for each block side or as a general texture.
   *
   * @param entries An object where each key is a block name, and the value is an object containing the block's properties:
   *   - `textures`: A map of block side names to texture paths, or a single texture for all sides.
   *   - `carried_textures`: The texture applied when the block is carried.
   *   - `sound`: The sound played when the block is interacted with.
   *   - `isotropic`: A boolean indicating if the texture should be applied isotropically (same on all sides).
   */
  public entry(entries: {
    [key: string]: {
      textures?:
        | {
            [key in BlockSideKey]: string;
          }
        | {
            [key: string]: string;
          }
        | string;
      carried_textures?: string;
      sound?: string;
      isotropic?: boolean;
    };
  }) {
    for (const e of Object.entries(entries)) {
      this.data[e[0]] = e[1];
    }
  }

  /**
   * Compiles and generates the `blocks.json` file.
   *
   * This method creates the `blocks.json` file in the specified resource pack directory, including the texture
   * and sound mappings for all blocks added using the `entry` method.
   *
   * @param rePath The base path where the resource pack is located, used to determine where the `blocks.json` file is saved.
   */
  public compile(rePath: string) {
    const entries = Object.keys(this.data).length - 1; // Exclude format_version
    if (entries <= 0) return;
    const startTime = Benchmark.set();
    let errors = 0;
    try {
      rePath += "/blocks.json";
      // Generate blocks.json
      fs.writeFileSync(rePath, JSON.stringify(this.data, null, 2));
    } catch (e) {
      errors++;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    if (errors > 0)
      Console.queue.custom(
        `§aBlockMap §cfailure§r: '§c${errors}§r errors'`,
        0,
        elapsed
      );
    else
      Console.queue.custom(
        `§aBlockMap §bgenerate§r: '[§e${entries}§r entries]'`,
        0,
        elapsed
      );
  }
}
