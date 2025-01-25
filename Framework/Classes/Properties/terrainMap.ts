import * as fs from "fs";
import { Benchmark, Console } from "../../Utilities/utils";

/**
 * Terrain map class used for generating texture translations for terrain.
 * This class allows the addition of texture entries and the compilation of a `terrain_texture.json` file.
 * @class
 */
export class TerrainMap {
  /** The project ID associated with the terrain map. */
  private projectId = "unknown";

  /** The data object containing texture-related information for terrain. */
  private data: any = {
    texture_name: "atlas.terrain",
    padding: 8,
    num_mip_levels: 4,
    texture_data: {},
  };

  /**
   * Constructs an instance of the TerrainMap class.
   */
  constructor() {}

  /**
   * Adds texture entries to the terrain map. If the texture path does not start with "textures/", it will be prefixed with "textures/".
   * @param entries An object containing texture entries where the key is a block identifier and the value contains texture information.
   * @example
   * ```ts
   * terrainMap.entry({
   *   "peanut:example": {
   *     textures: "example_texture"
   *   }
   * });
   * ```
   */
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
      if (typeof e[1].textures === "string") {
        if (!e[1].textures.startsWith("textures/"))
          e[1].textures = "textures/" + e[1].textures;
      } else {
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

  /**
   * Compiles the terrain map into a `terrain_texture.json` file in the specified resource path.
   * The resulting JSON file will contain the texture data for terrain entries added to the map.
   * @param rePath The path where the compiled `terrain_texture.json` file should be saved.
   * @returns {void}
   */
  public compile(rePath: string): void {
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
