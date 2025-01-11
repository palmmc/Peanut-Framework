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
