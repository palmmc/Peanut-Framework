import * as fs from "fs";
import { Benchmark, Console } from "../../Utilities/utils";

/**
 * Item map class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class ItemMap {
  private projectId = "unknown";
  private data: any = {
    texture_name: "atlas.items",
    texture_data: {},
  };
  constructor() {}
  public entry(entries: {
    [key: string]: {
      textures: string;
    };
  }) {
    for (const e of Object.entries(entries)) {
      e[1].textures = "textures/" + e[1].textures;
      this.data.texture_data[e[0]] = e[1];
    }
  }
  public compile(rePath: string) {
    const startTime = Benchmark.set();
    let errors = 0;
    try {
      this.data["resource_pack_name"] = this.projectId;
      rePath += "/textures";
      if (!fs.existsSync(rePath)) fs.mkdirSync(rePath);
      rePath += "/item_texture.json";
      // Generate item_texture.json
      fs.writeFileSync(rePath, JSON.stringify(this.data, null, 2));
    } catch (e) {
      errors++;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    if (errors > 0)
      Console.queue.custom(
        `§aItemMap §cfailure§r: '§c${errors}§r errors'`,
        0,
        elapsed
      );
    else
      Console.queue.custom(
        `§aItemMap §bgenerate§r: '[§e${
          Object.keys(this.data.texture_data).length
        }§r entries]'`,
        0,
        elapsed
      );
  }
}
