import * as fs from "fs";
import { Benchmark, Console } from "../../Utilities/utils";

/**
 * Terrain map class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class TerrainMap {
  private projectId = "unknown";
  private data: any = {
    texture_name: "atlas.terrain",
    padding: 8,
    num_mip_levels: 4,
    texture_data: {},
  };
  constructor() {}
  public entry(entries: {
    [key: string]: {
      textures:
        | {
            variations?: {
              path: string;
              weight?: number;
            }[];
          }
        | string;
    };
  }) {
    for (const e of Object.entries(entries)) {
      if (typeof e[1].textures === "string")
        e[1].textures = "textures/" + e[1].textures;
      else {
        for (let v of e[1].textures.variations) {
          const path =
            e[1].textures.variations[e[1].textures.variations.indexOf(v)].path;
          e[1].textures.variations[e[1].textures.variations.indexOf(v)].path =
            "textures/" + path;
        }
      }
      this.data.texture_data[e[0]] = e[1];
    }
  }
  public compile(rePath: string) {
    const entries = Object.keys(this.data.texture_data).length;
    if (entries <= 0) return;
    const startTime = Benchmark.set();
    let errors = 0;
    try {
      this.data["resource_pack_name"] = this.projectId;
      rePath += "/textures";
      if (!fs.existsSync(rePath)) fs.mkdirSync(rePath);
      rePath += "/terrain_texture.json";
      // Generate terrain_texture.json
      fs.writeFileSync(rePath, JSON.stringify(this.data, null, 2));
    } catch (e) {
      errors++;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    if (errors > 0)
      Console.queue.custom(
        `§aTerrainMap §cfailure§r: '§c${errors}§r errors'`,
        0,
        elapsed
      );
    else
      Console.queue.custom(
        `§aTerrainMap §bgenerate§r: '[§e${entries}§r entries]'`,
        0,
        elapsed
      );
  }
}
