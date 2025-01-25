import * as fs from "fs";
import { Benchmark, Console } from "../../Utilities/utils";

/**
 * ItemMap class used for generating item texture mappings.
 *
 * This class generates a JSON file (`item_texture.json`) containing texture mappings for items.
 * Each item entry is associated with a texture, and the generated JSON is saved in the specified resource pack directory.
 */
export class ItemMap {
  private projectId = "unknown";
  private data: any = {
    texture_name: "atlas.items",
    texture_data: {},
  };

  /**
   * Adds entries to the item texture map.
   *
   * This method adds texture mappings for items, where each entry contains the item's name as the key
   * and the associated texture path as the value. The texture path is automatically prefixed with "textures/"
   * if not already provided.
   *
   * @param entries An object where each key is an item name and each value contains the texture path for that item.
   */
  public entry(entries: {
    [key: string]: {
      textures: string;
    };
  }) {
    for (const e of Object.entries(entries)) {
      if (!e[1].textures.startsWith("textures/"))
        e[1].textures = "textures/" + e[1].textures;
      this.data.texture_data[e[0]] = e[1];
    }
  }

  /**
   * Compiles and generates the `item_texture.json` file.
   *
   * This method creates the `item_texture.json` file in the specified path. The JSON file includes the texture
   * mappings for all items added using the `entry` method. The file is saved in the `textures` directory of the
   * specified resource pack path.
   *
   * @param rePath The base path where the resource pack is located, used to determine where the `item_texture.json` file is saved.
   */
  public compile(rePath: string) {
    const entries = Object.keys(this.data.texture_data).length;
    if (entries <= 0) return;
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
        `§aItemMap §bgenerate§r: '[§e${entries}§r entries]'`,
        0,
        elapsed
      );
  }
}
