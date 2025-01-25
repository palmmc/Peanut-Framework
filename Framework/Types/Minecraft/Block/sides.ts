/**
 * Represents the different sides or directions of a block in Minecraft.
 * These values are used to identify the relative sides of a block when performing actions
 * such as block placement, breaking, or redstone interactions.
 * 
 * - "up" refers to the top side of a block.
 * - "down" refers to the bottom side of a block.
 * - "north" refers to the northern side of a block.
 * - "south" refers to the southern side of a block.
 * - "east" refers to the eastern side of a block.
 * - "west" refers to the western side of a block.
 * - "side" refers to any of the four horizontal sides (north, south, east, west).
 * - "all" refers to all sides of the block.
 * 
 * These keys are commonly used in scripting when defining interactions or behaviors
 * based on the orientation of the block.
 */
export type BlockSideKey =
  | "up"
  | "down"
  | "north"
  | "south"
  | "east"
  | "west"
  | "side"
  | "all";
