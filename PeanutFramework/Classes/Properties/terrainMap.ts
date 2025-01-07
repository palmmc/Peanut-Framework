/**
 * Terrain map class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class TerrainMap {
  private data: any = {
    texture_name: "atlas.terrain",
    padding: 8,
    num_mip_levels: 4,
    texture_data: {},
  };
  constructor(id: string) {
    this.data["resource_pack_name"] = id;
  }
}
