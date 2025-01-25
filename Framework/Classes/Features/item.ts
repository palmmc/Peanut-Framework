import * as fs from "fs";
import {
  LanguageKey,
  ItemDescriptor,
  BlockDescriptor,
  MenuCategory,
  VanillaItemTag,
  EnchantmentSlot,
  UseAnimation,
  EquipmentSlot,
} from "../../Types/types";
import { Benchmark, Console } from "../../Utilities/utils";
import { FORMAT_VERSION } from "../../version";
import { Project } from "../project";
import { Molang } from "../classes";

/**
 * Item class used for creating custom items.
 * @param identifier The string that is used in-game to identify the item.
 * @param displayName Optional (but recommended), the string to show up as the display name of the item in-game.
 * @param language Optional, the language the display name originates from. Defaults to `en_US`.
 * @example
 * ```ts
 * new Item("peanut:example", "Example Item")
 * ```
 */
export class Item {
  private projectId: string = "unknown";
  private data: any = { format_version: FORMAT_VERSION.ITEM };
  private properties: any = {};
  private components: any = {};
  private identifier: string;
  constructor(
    identifier: string,
    displayName?: string,
    language?: LanguageKey
  ) {
    this.identifier = identifier;
    this.data["minecraft:item"] = {
      description: { identifier: this.identifier },
    };
    if (displayName) {
      this.properties.translation = {
        source: language,
        entries: [{ key: `item.${identifier}`, text: displayName }],
      };
    }
  }

  /**
   * Determine whether an item can be placed in the off-hand slot of the inventory.
   * @param value Boolean value.
   */
  public allowOffHand(value: boolean) {
    this.components["minecraft:allow_off_hand"] = value;
    return this;
  }

  /**
   * Block Placer item component. Items with this component will place a block when used.
   * @param block The block that will be placed.
   * @param useOn List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
   * @example
   * ```ts
    new Item("peanut:rose_flower_basket", "Basket of Roses")
    .blockPlacer("minecraft:poppy", ["minecraft:grass_block", "minecraft:dirt"])
    ```
   */
  public blockPlacer(block: string, useOn?: BlockDescriptor[]) {
    this.components["minecraft:block_placer"] = {
      block: block,
      use_on: useOn,
    };
    return this;
  }

  /**
   * Enables the bundle interface and functionality on the item.
   * @param numViewableSlots Defines the maximum number of item stacks accessible from the top of the bundle. Slots are accessed in rows filling from the bottom of the tooltip from right to left.
   */
  public bundleInteraction(numViewableSlots: number) {
    this.components["minecraft:bundle_interaction"] = {
      num_viewable_slots: numViewableSlots,
    };
    return this;
  }

  /**
   * Determines if the item will break blocks in Creative Mode while swinging.
   * @param value Boolean value.
   */
  public canDestroyInCreative(value: boolean) {
    this.components["minecraft:can_destroy_in_creative"] = value;
    return this;
  }

  /**
   * The type of cool down for this item.
   * @param category The type of cool down for this item.
   * @param duration The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again. If this value is a negative number, it renders the item unusable.
   */
  public cooldown(category: string = "attack", duration: number) {
    this.components["minecraft:cooldown"] = {
      category: category,
      duration: duration,
    };
    return this;
  }

  /**
   * Custom components are a new way of connecting the configuration of Blocks and Items in JSON to the power of scripting in a very direct and targeted manner.
   * @param component String array of custom component IDs.
   */
  public customComponent(component: string[]) {
    this.components["minecraft:custom_components"] = component;
    return this;
  }

  /**
   * Determines how much extra damage the item does on attack.
   * @param value How much extra damage the item does on attack. Note that this must be a positive value.
   */
  public damage(value: number) {
    this.components["minecraft:damage"] = { value: value };
    return this;
  }

  /**
   * Causes the item to absorb damage that would otherwise be dealt to its wearer.
   * @param absorbableCauses List of damage causes (such as entity_attack and magma) that can be absorbed by the item.
   */
  public damageAbsorption(absorbableCauses: string[]) {
    this.components["minecraft:damage_absorption"] = {
      absorbable_causes: absorbableCauses,
    };
    return this;
  }

  /**
   * Determine how quickly an item can dig specific blocks.
   * @param useEfficiency Determines whether the item should be impacted if the efficiency enchant is applied to it. Does not seem to work.
   * @param destroySpeeds A list of blocks to dig, with correlating speeds of digging.
   * @param block What block the item will destroy.
   * @param speed Dig speed. Can be negative. If negative, the item will not be able to destroy the block.
   */
  public digger(
    useEfficiency: boolean,
    destroySpeeds: {
      block: string | { tags: string };
      speed: number;
    }[]
  ) {
    this.components["minecraft:digger"] = {
      use_efficiency: useEfficiency,
      destroy_speeds: destroySpeeds,
    };
    return this;
  }

  /**
   * Determines how much damage the item can take before breaking, and allows the item to be combined in crafting.
   * @param damageChance Damage chance is the percentage chance of this item losing durability. Default is set at 100. Defined as an int range with min and max value.
   * @param maxDurability Max durability is the amount of damage that this item can take before breaking. This is a required parameter with a minimum value of 0.
   */
  public durability(
    maxDurability: number,
    damageChance?: { min: number; max: number }
  ) {
    this.components["minecraft:durability"] = {
      damage_chance: damageChance,
      max_durability: maxDurability,
    };
    return this;
  }

  /**
   * Enables an item to emit effects when it receives damage.
   * @param durabilityThresholds Items define both the durability thresholds, and the effects emitted when each threshold is met.
   * @param durability The effects are emitted when the item durability value is less than or equal to this value.
   * @param particleType Particle effect to emit when the threshold is met.
   * @param soundEvent Sound effect to emit when the threshold is met.
   */
  public durabilitySensor(
    durabilityThresholds: {
      durability: number;
      particle_type?: string;
      sound_event?: string;
    }[]
  ) {
    this.components["minecraft:durability_sensor"] = {
      durability_thresholds: durabilityThresholds,
    };
    return this;
  }

  /**
   * Allows the item to be dyed by cauldron water.
   * @param defaultColor Optional hex color to use by default before the player has dyed the item.
   */
  public dyeable(defaultColor?: string) {
    this.components["minecraft:dyeable"] = {
      default_color: defaultColor,
    };
    return this;
  }

  /**
   * Determines what enchantments can be applied to the item.
   * @param slot What enchantments can be applied (ex. Using bow would allow this item to be enchanted as if it were a bow).
   * @param value The value of the enchantment (minimum of 0).
   */
  public enchantable(slot: EnchantmentSlot, value: number) {
    this.components["minecraft:enchantable"] = {
      slot: slot,
      value: value,
    };
    return this;
  }

  /**
   * Allows the item to place specified entities into the world.
   * @param entity The entity to be placed in the world.
   * @param dispenseOn List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
   * @param useOn List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
   */
  public entityPlacer(entity: string, dispenseOn?: string[], useOn?: string[]) {
    this.components["minecraft:entity_placer"] = {
      entity: entity,
      dispense_on: dispenseOn,
      use_on: useOn,
    };
    return this;
  }

  /**
   * When an item has a food component, it becomes edible to the player.
   * @param canAlwaysEat If true you can always eat this item (even when not hungry).
   * @param nutrition The value that is added to the actor's nutrition when the item is used. Can be negative. Max value is the 32-bit integer limit.
   * @param saturationModifier Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Value must be greater than 0.
   * @param usingConvertsTo When used, converts to the item specified by the string in this field.
   */
  public food(
    foodOptions: {
      nutrition: number;
      saturationModifier: number;
    },
    canAlwaysEat: boolean = false,
    usingConvertsTo?: string
  ) {
    this.components["minecraft:food"] = {
      can_always_eat: canAlwaysEat,
      nutrition: foodOptions.nutrition,
      saturation_modifier: foodOptions.saturationModifier,
      using_converts_to: usingConvertsTo,
    };
    return this;
  }

  /**
   * Allows the item to be used as fuel in a furnace to 'cook' other items.
   * @param duration How long in seconds will this fuel cook items for. Minimum value: 0.05.
   */
  public fuel(duration: number) {
    this.components["minecraft:fuel"] = { duration: duration };
    return this;
  }

  /**
   * Determines whether the item has the enchanted glint render effect on it.
   * @param value Boolean value.
   */
  public glint(value: boolean) {
    this.components["minecraft:glint"] = { value: value };
    return this;
  }

  /**
   * Determines if an item is rendered like a tool while in-hand.
   * @param value Boolean value.
   */
  public handEquipped(value: boolean) {
    this.components["minecraft:hand_equipped"] = { value: value };
    return this;
  }

  /**
   * Determines the color of the item name when hovering over it.
   * @param color Valid colors can be found here: https://minecraft.wiki/w/Formatting_codes#Color_codes
   */
  public hoverTextColor(color: string) {
    this.components["minecraft:hover_text_color"] = color;
    return this;
  }

  /**
   * Determines the icon to represent the item in the Ul and elsewhere.
   * @param textures This map contains the different textures that can be used for the item's icon. default will contain the actual icon texture. Armor trim textures and palettes can be specified here as well. The icon textures are the keys from the resource_pack/textures/item_texture.json -&gt; texture_data object associated with the texture file.
   */
  public icon(
    name: string,
    path: string,
    options?: {
      dyed?: string;
      icon_trim?: string;
    }
  ) {
    this.components["minecraft:icon"] = {
      textures: {
        default: name,
        dyed: options?.dyed,
        icon_trim: options?.icon_trim,
      },
    };
    this.properties.texture = {
      [name]: {
        textures: path,
      },
    };
    return this;
  }

  /**
   * This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button.
   * @param value When set to true, default \"Use Item\" text will be used.
   */
  public interactButton(value: boolean | string) {
    this.components["minecraft:interact_button"] = value;
    return this;
  }

  /**
   * Determines whether an item interacts with liquid blocks on use.
   * @param value Boolean value.
   */
  public liquidClipped(value: boolean) {
    this.components["minecraft:liquid_clipped"] = { value: value };
    return this;
  }

  /**
   * The maximum number of items that can be held in one stack of this item type.
   * @param value Integer value.
   */
  public maxStackSize(value: number) {
    this.components["minecraft:max_stack_size"] = { value: value };
    return this;
  }

  /**
   * Assigns this item to a menu category and/or creative item group.
   * @param category Category to assign.
   * @param group Creative mode group to assign.
   * @param isHiddenInCommands Whether or not this item should be accessible with commands.
   */
  public menuCategory(category: MenuCategory) {
    this.data["minecraft:item"].description.menu_category = category;
    return this;
  }

  /**
   * Projectile item component. Projectile items shoot out, like an arrow.
   * @param minimumCriticalPower Defines the time a projectile needs to charge in order to critically hit.
   * @param projectileEntity The entity to be fired as a projectile. If no namespace is specified, it is assumed to be minecraft.
   */
  public projectile(
    projectileEntity: string,
    minimumCriticalPower: number = 1
  ) {
    this.components["minecraft:projectile"] = {
      minimum_critical_power: minimumCriticalPower,
      projectile_entity: projectileEntity,
    };
    return this;
  }

  /**
   * Represents how difficult the item is to obtain by changing the color of its name text.
   * @param rarity Rarity of the item.
   */
  public rarity(rarity: "common" | "uncommon" | "rare" | "epic") {
    this.components["minecraft:rarity"] = rarity;
    return this;
  }

  /**
   * The record item component allows the item to play a sound when used in a jukebox.
   * @param comparatorSignal Signal strength for comparator blocks to use. While this value can be any number(even negative!), the comparator signal still locks itself between {0, 15}.
   * @param duration Duration of sound event in seconds float value.
   * @param soundEvent Sound event types. If sound type is any of the vanilla music discs, the item will have the lore of the artist's name. When played in a jukebox, an actionbar will appear on the player's screen describing what record is being played. Regardless of what sound type used, the item's text color will change to aqua just like vanilla music discs. Only vanilla sound events are allowed.
   */
  public record(
    comparatorSignal: number,
    duration: number,
    soundEvent: string
  ) {
    this.components["minecraft:record"] = {
      comparator_signal: comparatorSignal,
      duration: duration,
      sound_event: soundEvent,
    };
    return this;
  }

  /**
   * Determines whether an item can be repaired in an anvil
   * @param repairItems List of repair item entries.
   * @param items The items used to repair the item.
   * @param repairAmount How much durability is repaired.
   */
  public repairable(
    repairItems: { items: string[]; repair_amount: number | string | Molang }[]
  ) {
    this.components["minecraft:repairable"] = {
      repair_items: repairItems,
    };
    return this;
  }

  /**
   * Shooter Item Component. Must have the minecraft:use_modifiers component in order to function properly.
   * @param ammunition
   * @param item Denotes the item description identifier. Item must have the minecraft:projectile component.
   * @param useOffhand When set to true, ammunition can be used from the offhand.
   * @param searchInventory Determines whether the inventory can be searched for ammunition to use. Required to be true if used in Survival. In Creative, required to be true if use_in_creative is false. Will not consume ammunition if in Creative.
   * @param useInCreative Determines whether the ammunition can be used in Creative mode.
   * @param chargeOnDraw Sets if the item is charged when drawn. Item's minecraft:use_modifiers -&gt; use_duration must be &gt;= max_draw_duration.
   * @param maxDrawDuration Determines how long can the weapon can be drawn before releasing automatically.
   * @param scalePowerByDrawDuration When set to true, the longer the weapon is drawn, the more power it will have when released.
   */
  public shooter(
    ammunition: {
      item: string;
      use_offhand?: boolean;
      search_inventory?: boolean;
      use_in_creative?: boolean;
    }[],
    chargeOnDraw: boolean,
    maxDrawDuration: number,
    scalePowerByDrawDuration: boolean
  ) {
    this.components["minecraft:shooter"] = {
      ammunition: ammunition,
      charge_on_draw: chargeOnDraw,
      max_draw_duration: maxDrawDuration,
      scale_power_by_draw_duration: scalePowerByDrawDuration,
    };
    return this;
  }

  /**
   * Allows you to specify whether the item should despawn when dropped on the ground.
   * @param value Boolean value.
   */
  public shouldDespawn(value: boolean) {
    this.components["minecraft:should_despawn"] = { value: value };
    return this;
  }

  /**
   * Allows you to specify whether the item should stack by data or not.
   * @param value Boolean value.
   */
  public stackedByData(value: boolean) {
    this.components["minecraft:stacked_by_data"] = { value: value };
    return this;
  }

  /**
   * Storage item component. Items with this component will open a Storage Ul when used.
   * @param containerType The type of container to open.
   * @param openSound The sound that plays when the container is opened.
   * @param closeSound The sound that plays when the container is closed.
   */
  public storageItem(
    max_slots: number = 64,
    max_weight_limit: number = 64,
    weight_in_storage_item: number = 1,
    allow_nested_storage_items: boolean = false,
    banned_items: string[] = [
      "minecraft:shulker_box",
      "minecraft:undyed_shulker_box",
    ]
  ) {
    this.components["minecraft:storage_item"] = {
      max_slots,
      max_weight_limit,
      weight_in_storage_item,
      allow_nested_storage_items,
      banned_items,
    };
    return this;
  }

  /**
   * Tags are empty JSON Objects that define a tag to be added to an item. The component has no body or parameters, it is simply a flag, and when the item is parsed it will be added to the item's tag list.
   * @param tags A list of tags to be added to the item.
   */
  public tag(tags: VanillaItemTag[] | string[]) {
    for (let t of tags) {
      this.components["tag:" + t] = {};
    }
    return this;
  }

  /**
   *  Throwable items, such as a snowball. Item must have the `.projectile()` component.
   * @param doSwingAnimation Whether the item should use the swing animation when thrown.
   * @param launchPowerScale The scale at which the power of the throw increases. Can be negative. Negative values will launch the projectile the opposite way.
   * @param maxDrawDuration The maximum duration to draw a throwable item. Can be negative. Will shoot instantly. No side effects if max is less than min from testing.
   * @param maxLaunchPower The maximum power to launch the throwable item. Can be negative.
   * @param minDrawDuration The minimum duration to draw a throwable item. Can be negative. Will shoot instantly.
   * @param scalePowerByDrawDuration Whether or not the power of the throw increases with duration charged. When `true`, The longer you hold, the more power it will have when released.
   */
  public throwable(
    doSwingAnimation: boolean = false,
    launchPowerScale: number = 1,
    maxDrawDuration: number = 0,
    maxLaunchPower: number = 1,
    minDrawDuration: number = 0,
    scalePowerByDrawDuration: boolean = false
  ) {
    this.components["minecraft:throwable"] = {
      do_swing_animation: doSwingAnimation,
      launch_power_scale: launchPowerScale,
      max_draw_duration: maxDrawDuration,
      max_launch_power: maxLaunchPower,
      min_draw_duration: minDrawDuration,
      scale_power_by_draw_duration: scalePowerByDrawDuration,
    };
    return this;
  }

  /**
   * Allows the item to use specific animations.
   * @param animations Animation array.
   * @param use Boolean value. If true, the animation will be used.
   * @param attackCooldownCooldown time (in seconds) for the attack animation.
   * @param type Animation type.
   */
  public useAnimation(type: UseAnimation) {
    this.components["minecraft:use_animation"] = {
      value: type,
    };
    return this;
  }

  /**
   * Defines the use modifiers for the item.
   * @param movementModifier Movement modifier is the speed at which the actor will move while using the item.
   * @param useDuration Use Duration is how long it takes to use the item.
   */
  public useModifiers(useDuration: number, movementModifier: number = 1) {
    this.components["minecraft:use_modifiers"] = {
      movement_modifier: movementModifier,
      use_duration: useDuration,
    };
    return this;
  }

  /**
   * Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1.
   * @param protection Protection value.
   * @param slot Slot to be worn on.
   */
  public wearable(protection: number, slot: EquipmentSlot) {
    this.components["minecraft:wearable"] = {
      protection: protection,
      slot: slot,
    };
    return this;
  }

  /**
   * Compiles a finished item class to JSON. This process is automatic.
   */
  public compile(project: Project) {
    if (!this.projectId || this.projectId == "unknown") {
      Console.queue.warn(
        `§bFeature §r'${this.identifier}' §bis not linked to a project.\n   §rAdd it to your §9project§f.§bfeatures§r array to compile it.`
      );
      return;
    }
    const startTime = Benchmark.set();
    let errors = 0;
    try {
      this.data["minecraft:item"]["components"] = this.components;
      const directoryPath = `./behavior_packs/${this.projectId}/items`;
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }
      if (this.properties?.translation)
        project.language.translate(this.properties.translation);
      if (this.properties.texture)
        project.itemMap.entry(this.properties.texture);
      fs.writeFileSync(
        `./behavior_packs/${this.projectId}/items/${this.identifier.substring(
          this.identifier.indexOf(":") + 1
        )}.json`,
        JSON.stringify(this.data, null, 2)
      );
    } catch (e) {
      errors++;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    if (errors > 0)
      Console.queue.err(
        `§bitem§r, [${this.identifier}, §c${errors} §rerrors]`,
        elapsed
      );
    else Console.queue.info(`§bitem§r, [${this.identifier}]`, elapsed);
  }
}
