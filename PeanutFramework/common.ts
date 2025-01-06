/**
 * Simple 3D vector.
 * @param X - X coordinate value.
 * @param Y - Y coordinate value.
 * @param Z - Z coordinate value.
 *
 */
export type Vector = {
  x: number;
  y: number;
  z: number;
};

export class toJSON {
  public static Vector(vector?: Vector) {
    return vector ? [vector.x, vector.y, vector.z] : undefined;
  }
}

/**
 * Geometry is an JSON component that specifies the geometry identifier and bone visibility to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 * @param string - Identifier string.
 *
 * *OR*
 *
 * @param identifier - Valid geometry identifier.
 * @param bone_visibility - An optional array of Booleans that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility' the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis.
 */

export type VanillaBlockState =
  | "active"
  | "age"
  | "age_bit"
  | "allow_underwater_bit"
  | "attached_bit"
  | "attachment"
  | "bamboo_leaf_size"
  | "bamboo_stalk_thickness"
  | "big_dripleaf_tilt"
  | "bite_counter"
  | "block_face"
  | "block_light_level"
  | "brewing_stand_slot_a_bit"
  | "brewing_stand_slot_b_bit"
  | "brewing_stand_slot_c_bit"
  | "button_pressed_bit"
  | "candles"
  | "cardinal_direction"
  | "cauldron_liquid"
  | "chemistry_table_type"
  | "chisel_type"
  | "cluster_count"
  | "color"
  | "color_bit"
  | "composter_fill_level"
  | "conditional_bit"
  | "coral_color"
  | "coral_direction"
  | "coral_fan_direction"
  | "coral_hang_type_bit"
  | "covered_bit"
  | "cracked_state"
  | "damage"
  | "deprecated"
  | "dead_bit"
  | "direction"
  | "dirt_type"
  | "disarmed_bit"
  | "door_hinge_bit"
  | "double_plant_type"
  | "drag_down"
  | "dripstone_thickness"
  | "end_portal_eye_bit"
  | "explode_bit"
  | "extinguished"
  | "facing_direction"
  | "fill_level"
  | "flower_type"
  | "growth"
  | "hanging_bit"
  | "head_piece_bit"
  | "height"
  | "honey_level"
  | "huge_mushroom_bits"
  | "infiniburn_bit"
  | "in_wall_bit"
  | "item_frame_map_bit"
  | "item_frame_photo_bit"
  | "kelp_age"
  | "lever_direction"
  | "liquid_depth"
  | "lit"
  | "moisturized_amount"
  | "monster_egg_stone_type"
  | "multi_face_direction_bits"
  | "new_leaf_type"
  | "new_log_type"
  | "occupied_bit"
  | "old_leaf_type"
  | "old_log_type"
  | "ominous"
  | "open_bit"
  | "output_lit_bit"
  | "output_subtract_bit"
  | "persistent_bit"
  | "pillar_axis"
  | "portal_axis"
  | "powered_bit"
  | "prismarine_block_type"
  | "rail_data_bit"
  | "rail_direction"
  | "redstone_signal"
  | "repeater_delay"
  | "respawn_anchor_charge"
  | "rotation"
  | "sandstone_type"
  | "sand_type"
  | "sapling_type"
  | "sculk_sensor_phase"
  | "sea_grass_type"
  | "sponge_type"
  | "stability"
  | "stability_check"
  | "stone_brick_type"
  | "stone_slab_type"
  | "stone_slab_type_2"
  | "stone_slab_type_3"
  | "stone_slab_type_4"
  | "stone_type"
  | "stripped_bit"
  | "structure_block_type"
  | "structure_void_type"
  | "suspended_bit"
  | "tall_grass_type"
  | "toggle_bit"
  | "top_slot_bit"
  | "torch_facing_direction"
  | "triggered_bit"
  | "turtle_egg_count"
  | "twisting_vines_age"
  | "update_bit"
  | "upper_block_bit"
  | "upside_down_bit"
  | "vertical_half"
  | "vine_direction_bits"
  | "wall_block_type"
  | "wall_connection_type_east"
  | "wall_connection_type_north"
  | "wall_connection_type_south"
  | "wall_connection_type_west"
  | "wall_post_bit"
  | "weeping_vines_age"
  | "weirdo_direction"
  | "wood_type";

export type VanillaBlockTag =
  | "acacia"
  | "birch"
  | "dark_oak"
  | "diamond_pick_diggable"
  | "dirt"
  | "fertilize_area"
  | "grass"
  | "gravel"
  | "gold_pick_diggable"
  | "iron_pick_diggable"
  | "jungle"
  | "log"
  | "metal"
  | "minecraft:crop"
  | "minecraft:diamond_tier_destructible"
  | "minecraft:iron_tier_destructible"
  | "minecraft:is_hatchet_item_destructible"
  | "minecraft:is_hoe_item_destructible"
  | "minecraft:is_item_tier_destructible"
  | "minecraft:is_mace_item_destructible"
  | "minecraft:is_pickaxe_item_destructible"
  | "minecraft:is_shears_item_destructible"
  | "minecraft:is_shovel_item_destructible"
  | "minecraft:is_sword_item_destructible"
  | "minecraft:netherite_tier_destructible"
  | "minecraft:stone_tier_destructible"
  | "mob_spawner"
  | "not_feature_replaceable"
  | "oak"
  | "one_way_collidable"
  | "plant"
  | "pumpkin"
  | "rail"
  | "sand"
  | "snow"
  | "spruce"
  | "stone"
  | "stone_pick_diggable"
  | "text_sign"
  | "trapdoors"
  | "water"
  | "wood"
  | "wood_pick_diggable";
export type Geometry =
  | {
      identifier: string;
      bone_visibility?: {
        [key: string]: boolean;
      };
    }
  | string;

export type ItemDescriptor = string | { tags: string };
export type BlockDescriptor =
  | string
  | {
      name?: string;
      states?:
        | { [key in VanillaBlockState]: string | number | boolean }
        | { [key: string]: string | number | boolean };
      tags?: string;
    };
export type BlockSideKey =
  | "up"
  | "down"
  | "north"
  | "south"
  | "east"
  | "west"
  | "side"
  | "all";
type MaterialKey = "*" | "up" | "down" | "north" | "south" | "east" | "west";
type BlockRenderMethods =
  | "alpha_test"
  | "alpha_test_single_sided"
  | "blend"
  | "double_sided"
  | "opaque";
type EntityRenderMethods =
  | "alpha_test"
  | "alpha_test_single_sided"
  | "blend"
  | "double_sided"
  | "opaque"
  | "alpha_block"
  | "alpha_block_color"
  | "banner"
  | "banner_pole"
  | "beacon_beam"
  | "beacon_beam_transparent"
  | "charged_creeper"
  | "conduit_wind"
  | "entity"
  | "entity_alphablend"
  | "entity_alphablend_nocolorentity_static"
  | "entity_alphatest"
  | "entity_alphatest_change_color"
  | "entity_alphatest_change_color_glint"
  | "entity_alphatest_glint"
  | "entity_alphatest_glint_item"
  | "entity_alphatest_multicolor_tint"
  | "entity_beam"
  | "entity_beam_additive"
  | "entity_change_color"
  | "entity_change_color_glint"
  | "entity_custom"
  | "entity_dissolve_layer0"
  | "entity_dissolve_layer1"
  | "entity_emissive"
  | "entity_emissive_alpha"
  | "entity_emissive_alpha_one_sided"
  | "entity_flat_color_line"
  | "entity_glint"
  | "entity_lead_base"
  | "entity_loyalty_rope"
  | "entity_multitexture"
  | "entity_multitexture_alpha_test"
  | "entity_multitexture_alpha_test_color_mask"
  | "entity_multitexture_color_mask"
  | "entity_multitexture_masked"
  | "entity_multitexture_multiplicative_blend"
  | "entity_nocull"
  | "guardian_ghost"
  | "item_in_hand"
  | "item_in_hand_entity_alphatest"
  | "item_in_hand_entity_alphatest_color"
  | "item_in_hand_glint"
  | "item_in_hand_multicolor_tint"
  | "map"
  | "map_decoration"
  | "map_marker"
  | "moving_block"
  | "moving_block_alpha"
  | "moving_block_alpha_seasons"
  | "moving_block_alpha_single_side"
  | "moving_block_blend"
  | "moving_block_double_side"
  | "moving_block_seasons"
  | "opaque_block"
  | "opaque_block_color"
  | "opaque_block_color_uv2";
type RenderMethods = BlockRenderMethods | EntityRenderMethods;
/**
 * The Material Instances component contains a map of material instance names/face names to material instance definitions (JSON Objects). The material instance * is required and will be used for any materials that don't have a match.
 * @param texture - Texture name for the material.
 * @param ambient_occlusion - If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting.
 * @param face_dimming - This material should be dimmed by the direction it's facing.
 * @param render_method - The render method to use. Must be one of the options listed in the table below. See this page to understand the relationship between render method and render distance.
 */
export type MaterialInstances =
  | {
      [key in MaterialKey]?: {
        texture: string;
        ambient_occlusion?: boolean | number;
        face_dimming?: boolean;
        render_method?: RenderMethods;
      };
    }
  | {
      [key: string]: {
        texture: string;
        ambient_occlusion?: boolean | number;
        face_dimming?: boolean;
        render_method?: RenderMethods;
      };
    };
