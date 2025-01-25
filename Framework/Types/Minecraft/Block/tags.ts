/**
 * Represents various tags that categorize blocks in Minecraft.
 * These tags are used to group blocks by their material, function, or properties,
 * allowing for more efficient block handling, interactions, and behaviors.
 * Some tags are built-in Minecraft tags, while others are specific to Minecraft scripting.
 * 
 * Tags like "minecraft:iron_tier_destructible" or "minecraft:is_pickaxe_item_destructible" 
 * represent blocks that can be interacted with using specific tool tiers or items.
 * Tags like "dirt", "grass", "sand", and "stone" categorize blocks by their material type.
 * Tags such as "mob_spawner" or "plant" describe blocks with special properties or functions.
 *
 **/
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
