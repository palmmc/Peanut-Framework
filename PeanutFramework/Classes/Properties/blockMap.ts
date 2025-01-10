import * as fs from "fs";
import { BlockSideKey } from "../../Types/types";
import { Benchmark, Console } from "../../Utilities/utils";
import { FORMAT_VERSION } from "../../version";

/**
 * Terrain map class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class BlockMap {
  private projectId = "unknown";
  private data: any = {
    format_version: FORMAT_VERSION.BLOCKMAP,
  };
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
  public compile(rePath: string) {
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
        `§aBlockMap §bgenerate§r: '[§e${
          Object.keys(this.data).length - 1
        }§r entries]'`,
        0,
        elapsed
      );
  }
}
