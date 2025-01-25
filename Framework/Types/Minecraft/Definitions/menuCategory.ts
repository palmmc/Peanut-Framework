/**
 * Represents the categories that can be assigned to menu items in a Minecraft menu system.
 * These categories group items based on their general use or type, such as construction materials,
 * equipment, nature-related items, etc.
 */
type VanillaMenuCategories =
  | "construction"
  | "equipment"
  | "items"
  | "nature"
  | "none";

/**
 * Represents the specific item groups that can be associated with menu items in a Minecraft menu system.
 * These groups represent item sets based on their type, such as specific tools, blocks, or food items.
 * Each item group corresponds to a unique category of items, like axes, banners, or boats.
 **/
type VanillaMenuGroups =
  | "itemGroup.name.anvil"
  | "itemGroup.name.arrow"
  | "itemGroup.name.axe"
  | "itemGroup.name.banner"
  | "itemGroup.name.banner_pattern"
  | "itemGroup.name.bed"
  | "itemGroup.name.boat"
  | "itemGroup.name.boots"
  | "itemGroup.name.bundles"
  | "itemGroup.name.buttons"
  | "itemGroup.name.candles"
  | "itemGroup.name.chalkboard"
  | "itemGroup.name.chest"
  | "itemGroup.name.chestboat"
  | "itemGroup.name.chestplate"
  | "itemGroup.name.compounds"
  | "itemGroup.name.concrete"
  | "itemGroup.name.concretePowder"
  | "itemGroup.name.cookedFood"
  | "itemGroup.name.copper"
  | "itemGroup.name.coral"
  | "itemGroup.name.coral_decorations"
  | "itemGroup.name.crop"
  | "itemGroup.name.door"
  | "itemGroup.name.dye"
  | "itemGroup.name.enchantedBook"
  | "itemGroup.name.fence"
  | "itemGroup.name.fenceGate"
  | "itemGroup.name.firework"
  | "itemGroup.name.fireworkStars"
  | "itemGroup.name.flower"
  | "itemGroup.name.glass"
  | "itemGroup.name.glassPane"
  | "itemGroup.name.glazedTerracotta"
  | "itemGroup.name.goatHorn"
  | "itemGroup.name.grass"
  | "itemGroup.name.hanging_sign"
  | "itemGroup.name.helmet"
  | "itemGroup.name.hoe"
  | "itemGroup.name.horseArmor"
  | "itemGroup.name.leaves"
  | "itemGroup.name.leggings"
  | "itemGroup.name.lingeringPotion"
  | "itemGroup.name.log"
  | "itemGroup.name.minecart"
  | "itemGroup.name.miscFood"
  | "itemGroup.name.mobEgg"
  | "itemGroup.name.monsterStoneEgg"
  | "itemGroup.name.mushroom"
  | "itemGroup.name.netherWartBlock"
  | "itemGroup.name.ominousBottle"
  | "itemGroup.name.ore"
  | "itemGroup.name.permission"
  | "itemGroup.name.pickaxe"
  | "itemGroup.name.planks"
  | "itemGroup.name.potion"
  | "itemGroup.name.potterySherds"
  | "itemGroup.name.pressurePlate"
  | "itemGroup.name.products"
  | "itemGroup.name.rail"
  | "itemGroup.name.rawFood"
  | "itemGroup.name.record"
  | "itemGroup.name.sandstone"
  | "itemGroup.name.sapling"
  | "itemGroup.name.sculk"
  | "itemGroup.name.seed"
  | "itemGroup.name.shovel"
  | "itemGroup.name.shulkerBox"
  | "itemGroup.name.sign"
  | "itemGroup.name.skull"
  | "itemGroup.name.slab"
  | "itemGroup.name.smithing_templates"
  | "itemGroup.name.splashPotion"
  | "itemGroup.name.stainedClay"
  | "itemGroup.name.stairs"
  | "itemGroup.name.stone"
  | "itemGroup.name.stoneBrick"
  | "itemGroup.name.sword"
  | "itemGroup.name.trapdoor"
  | "itemGroup.name.walls"
  | "itemGroup.name.wood"
  | "itemGroup.name.wool"
  | "itemGroup.name.woolCarpet";

export type MenuCategory = {
  category?: VanillaMenuCategories;
  group?: VanillaMenuGroups;
  is_hidden_in_commands?: boolean;
};
