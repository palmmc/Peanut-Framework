/**
 * Represents the traits that can be associated with blocks in Minecraft, specifically related to their placement.
 * These traits define how a block can be placed in the world, such as its facing direction or position, 
 * and provide options for adjusting its orientation or rotation during placement.
 * 
 * The `minecraft:placement_direction` trait determines which directions the block can face and
 * optionally allows for a rotational offset.
 * The `minecraft:placement_position` trait specifies the possible positions where the block can be placed.
 */
export type VanillaBlockTraits = {
  "minecraft:placement_direction"?: {
    enabled_states: (
      | "minecraft:cardinal_direction"
      | "minecraft:facing_direction"
    )[];
    y_rotation_offset?: 90 | 180 | -90;
  };
  "minecraft:placement_position"?: {
    enabled_states: ("minecraft:block_face" | "minecraft:vertical_half")[];
  };
};
