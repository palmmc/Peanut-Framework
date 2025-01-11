[**peanut-framework**](../../../../../README.md)

***

[peanut-framework](../../../../../modules.md) / [Classes/Features/Item/item](../README.md) / Item

# Class: Item

Defined in: [Classes/Features/Item/item.ts:17](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L17)

## Constructors

### new Item()

> **new Item**(`identifier`, `displayName`?, `language`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:23](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L23)

#### Parameters

##### identifier

`string`

##### displayName?

`string`

##### language?

[`LanguageKey`](../../../../../Types/Minecraft/Language/key/type-aliases/LanguageKey.md)

#### Returns

[`Item`](Item.md)

## Methods

### allowOffHand()

> **allowOffHand**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:44](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L44)

Determine whether an item can be placed in the off-hand slot of the inventory.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### blockPlacer()

> **blockPlacer**(`block`, `useOn`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:54](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L54)

Block Placer item component. Items with this component will place a block when used.

#### Parameters

##### block

`string`

The block that will be placed.

##### useOn?

[`BlockDescriptor`](../../../../../Types/Minecraft/Descriptors/block/type-aliases/BlockDescriptor.md)[]

List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.

#### Returns

[`Item`](Item.md)

***

### bundleInteraction()

> **bundleInteraction**(`numViewableSlots`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:66](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L66)

Enables the bundle interface and functionality on the item.

#### Parameters

##### numViewableSlots

`number`

Defines the maximum number of item stacks accessible from the top of the bundle. Slots are accessed in rows filling from the bottom of the tooltip from right to left.

#### Returns

[`Item`](Item.md)

***

### canDestroyInCreative()

> **canDestroyInCreative**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:77](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L77)

Determines if the item will break blocks in Creative Mode while swinging.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### compile()

> **compile**(`project`): `void`

Defined in: [Classes/Features/Item/item.ts:561](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L561)

Compiles a finished item class to JSON. This process is automatic.

#### Parameters

##### project

[`Project`](../../../../project/classes/Project.md)

#### Returns

`void`

***

### cooldown()

> **cooldown**(`category`, `duration`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:87](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L87)

The type of cool down for this item.

#### Parameters

##### category

`string` = `"attack"`

The type of cool down for this item.

##### duration

`number`

The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again. If this value is a negative number, it renders the item unusable.

#### Returns

[`Item`](Item.md)

***

### customComponent()

> **customComponent**(`component`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:99](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L99)

Custom components are a new way of connecting the configuration of Blocks and Items in JSON to the power of scripting in a very direct and targeted manner.

#### Parameters

##### component

`string`[]

String array of custom component IDs.

#### Returns

[`Item`](Item.md)

***

### damage()

> **damage**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:108](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L108)

Determines how much extra damage the item does on attack.

#### Parameters

##### value

`number`

How much extra damage the item does on attack. Note that this must be a positive value.

#### Returns

[`Item`](Item.md)

***

### damageAbsorption()

> **damageAbsorption**(`absorbableCauses`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:117](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L117)

Causes the item to absorb damage that would otherwise be dealt to its wearer.

#### Parameters

##### absorbableCauses

`string`[]

List of damage causes (such as entity_attack and magma) that can be absorbed by the item.

#### Returns

[`Item`](Item.md)

***

### digger()

> **digger**(`useEfficiency`, `destroySpeeds`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:131](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L131)

Determine how quickly an item can dig specific blocks.

#### Parameters

##### useEfficiency

`boolean`

Determines whether the item should be impacted if the efficiency enchant is applied to it. Does not seem to work.

##### destroySpeeds

`object`[]

A list of blocks to dig, with correlating speeds of digging.

#### Returns

[`Item`](Item.md)

***

### durability()

> **durability**(`maxDurability`, `damageChance`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:150](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L150)

Determines how much damage the item can take before breaking, and allows the item to be combined in crafting.

#### Parameters

##### maxDurability

`number`

Max durability is the amount of damage that this item can take before breaking. This is a required parameter with a minimum value of 0.

##### damageChance?

Damage chance is the percentage chance of this item losing durability. Default is set at 100. Defined as an int range with min and max value.

###### max

`number`

###### min

`number`

#### Returns

[`Item`](Item.md)

***

### durabilitySensor()

> **durabilitySensor**(`durabilityThresholds`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:168](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L168)

Enables an item to emit effects when it receives damage.

#### Parameters

##### durabilityThresholds

`object`[]

Items define both the durability thresholds, and the effects emitted when each threshold is met.

#### Returns

[`Item`](Item.md)

***

### dyeable()

> **dyeable**(`defaultColor`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:185](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L185)

Allows the item to be dyed by cauldron water.

#### Parameters

##### defaultColor?

`string`

Optional hex color to use by default before the player has dyed the item.

#### Returns

[`Item`](Item.md)

***

### enchantable()

> **enchantable**(`slot`, `value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:197](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L197)

Determines what enchantments can be applied to the item.

#### Parameters

##### slot

[`EnchantmentSlot`](../../../../../Types/Minecraft/Enchantment/slot/type-aliases/EnchantmentSlot.md)

What enchantments can be applied (ex. Using bow would allow this item to be enchanted as if it were a bow).

##### value

`number`

The value of the enchantment (minimum of 0).

#### Returns

[`Item`](Item.md)

***

### entityPlacer()

> **entityPlacer**(`entity`, `dispenseOn`?, `useOn`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:211](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L211)

Allows the item to place specified entities into the world.

#### Parameters

##### entity

`string`

The entity to be placed in the world.

##### dispenseOn?

`string`[]

List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.

##### useOn?

`string`[]

List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.

#### Returns

[`Item`](Item.md)

***

### food()

> **food**(`foodOptions`, `canAlwaysEat`, `usingConvertsTo`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:227](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L227)

When an item has a food component, it becomes edible to the player.

#### Parameters

##### foodOptions

###### nutrition

`number`

###### saturationModifier

`number`

##### canAlwaysEat

`boolean` = `false`

If true you can always eat this item (even when not hungry).

##### usingConvertsTo?

`string`

When used, converts to the item specified by the string in this field.

#### Returns

[`Item`](Item.md)

***

### fuel()

> **fuel**(`duration`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:248](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L248)

Allows the item to be used as fuel in a furnace to 'cook' other items.

#### Parameters

##### duration

`number`

How long in seconds will this fuel cook items for. Minimum value: 0.05.

#### Returns

[`Item`](Item.md)

***

### glint()

> **glint**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:257](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L257)

Determines whether the item has the enchanted glint render effect on it.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### handEquipped()

> **handEquipped**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:266](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L266)

Determines if an item is rendered like a tool while in-hand.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### hoverTextColor()

> **hoverTextColor**(`color`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:275](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L275)

Determines the color of the item name when hovering over it.

#### Parameters

##### color

`string`

Valid colors can be found here: https://minecraft.wiki/w/Formatting_codes#Color_codes

#### Returns

[`Item`](Item.md)

***

### icon()

> **icon**(`name`, `path`, `options`?): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:284](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L284)

Determines the icon to represent the item in the Ul and elsewhere.

#### Parameters

##### name

`string`

##### path

`string`

##### options?

###### dyed

`string`

###### icon_trim

`string`

#### Returns

[`Item`](Item.md)

***

### interactButton()

> **interactButton**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:311](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L311)

This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button.

#### Parameters

##### value

When set to true, default \"Use Item\" text will be used.

`string` | `boolean`

#### Returns

[`Item`](Item.md)

***

### liquidClipped()

> **liquidClipped**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:320](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L320)

Determines whether an item interacts with liquid blocks on use.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### maxStackSize()

> **maxStackSize**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:329](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L329)

The maximum number of items that can be held in one stack of this item type.

#### Parameters

##### value

`number`

Integer value.

#### Returns

[`Item`](Item.md)

***

### menuCategory()

> **menuCategory**(`category`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:340](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L340)

Assigns this item to a menu category and/or creative item group.

#### Parameters

##### category

[`MenuCategory`](../../../../../Types/Minecraft/Definitions/menuCategory/type-aliases/MenuCategory.md)

Category to assign.

#### Returns

[`Item`](Item.md)

***

### projectile()

> **projectile**(`projectileEntity`, `minimumCriticalPower`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:350](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L350)

Projectile item component. Projectile items shoot out, like an arrow.

#### Parameters

##### projectileEntity

`string`

The entity to be fired as a projectile. If no namespace is specified, it is assumed to be minecraft.

##### minimumCriticalPower

`number` = `1`

Defines the time a projectile needs to charge in order to critically hit.

#### Returns

[`Item`](Item.md)

***

### rarity()

> **rarity**(`rarity`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:365](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L365)

Represents how difficult the item is to obtain by changing the color of its name text.

#### Parameters

##### rarity

Rarity of the item.

`"common"` | `"uncommon"` | `"rare"` | `"epic"`

#### Returns

[`Item`](Item.md)

***

### record()

> **record**(`comparatorSignal`, `duration`, `soundEvent`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:376](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L376)

The record item component allows the item to play a sound when used in a jukebox.

#### Parameters

##### comparatorSignal

`number`

Signal strength for comparator blocks to use. While this value can be any number(even negative!), the comparator signal still locks itself between {0, 15}.

##### duration

`number`

Duration of sound event in seconds float value.

##### soundEvent

`string`

Sound event types. If sound type is any of the vanilla music discs, the item will have the lore of the artist's name. When played in a jukebox, an actionbar will appear on the player's screen describing what record is being played. Regardless of what sound type used, the item's text color will change to aqua just like vanilla music discs. Only vanilla sound events are allowed.

#### Returns

[`Item`](Item.md)

***

### repairable()

> **repairable**(`repairItems`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:395](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L395)

Determines whether an item can be repaired in an anvil

#### Parameters

##### repairItems

`object`[]

List of repair item entries.

#### Returns

[`Item`](Item.md)

***

### shooter()

> **shooter**(`ammunition`, `chargeOnDraw`, `maxDrawDuration`, `scalePowerByDrawDuration`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:415](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L415)

Shooter Item Component. Must have the minecraft:use_modifiers component in order to function properly.

#### Parameters

##### ammunition

`object`[]

##### chargeOnDraw

`boolean`

Sets if the item is charged when drawn. Item's minecraft:use_modifiers -&gt; use_duration must be &gt;= max_draw_duration.

##### maxDrawDuration

`number`

Determines how long can the weapon can be drawn before releasing automatically.

##### scalePowerByDrawDuration

`boolean`

When set to true, the longer the weapon is drawn, the more power it will have when released.

#### Returns

[`Item`](Item.md)

***

### shouldDespawn()

> **shouldDespawn**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:439](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L439)

Allows you to specify whether the item should despawn when dropped on the ground.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### stackedByData()

> **stackedByData**(`value`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:448](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L448)

Allows you to specify whether the item should stack by data or not.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### storageItem()

> **storageItem**(`max_slots`, `max_weight_limit`, `weight_in_storage_item`, `allow_nested_storage_items`, `banned_items`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:459](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L459)

Storage item component. Items with this component will open a Storage Ul when used.

#### Parameters

##### max\_slots

`number` = `64`

##### max\_weight\_limit

`number` = `64`

##### weight\_in\_storage\_item

`number` = `1`

##### allow\_nested\_storage\_items

`boolean` = `false`

##### banned\_items

`string`[] = `...`

#### Returns

[`Item`](Item.md)

***

### tag()

> **tag**(`tags`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:483](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L483)

Tags are empty JSON Objects that define a tag to be added to an item. The component has no body or parameters, it is simply a flag, and when the item is parsed it will be added to the item's tag list.

#### Parameters

##### tags

A list of tags to be added to the item.

`string`[] | [`VanillaItemTag`](../../../../../Types/Minecraft/Item/tags/type-aliases/VanillaItemTag.md)[]

#### Returns

[`Item`](Item.md)

***

### throwable()

> **throwable**(`doSwingAnimation`, `launchPowerScale`, `maxDrawDuration`, `maxLaunchPower`, `minDrawDuration`, `scalePowerByDrawDuration`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:499](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L499)

Throwable items, such as a snowball. Item must have the `.projectile()` component.

#### Parameters

##### doSwingAnimation

`boolean` = `false`

Whether the item should use the swing animation when thrown.

##### launchPowerScale

`number` = `1`

The scale at which the power of the throw increases. Can be negative. Negative values will launch the projectile the opposite way.

##### maxDrawDuration

`number` = `0`

The maximum duration to draw a throwable item. Can be negative. Will shoot instantly. No side effects if max is less than min from testing.

##### maxLaunchPower

`number` = `1`

The maximum power to launch the throwable item. Can be negative.

##### minDrawDuration

`number` = `0`

The minimum duration to draw a throwable item. Can be negative. Will shoot instantly.

##### scalePowerByDrawDuration

`boolean` = `false`

Whether or not the power of the throw increases with duration charged. When `true`, The longer you hold, the more power it will have when released.

#### Returns

[`Item`](Item.md)

***

### useAnimation()

> **useAnimation**(`type`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:525](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L525)

Allows the item to use specific animations.

#### Parameters

##### type

[`UseAnimation`](../../../../../Types/Minecraft/Item/useAnimation/type-aliases/UseAnimation.md)

Animation type.

#### Returns

[`Item`](Item.md)

***

### useModifiers()

> **useModifiers**(`useDuration`, `movementModifier`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:537](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L537)

Defines the use modifiers for the item.

#### Parameters

##### useDuration

`number`

Use Duration is how long it takes to use the item.

##### movementModifier

`number` = `1`

Movement modifier is the speed at which the actor will move while using the item.

#### Returns

[`Item`](Item.md)

***

### wearable()

> **wearable**(`protection`, `slot`): [`Item`](Item.md)

Defined in: [Classes/Features/Item/item.ts:550](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Features/Item/item.ts#L550)

Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1.

#### Parameters

##### protection

`number`

Protection value.

##### slot

[`EquipmentSlot`](../../../../../Types/Minecraft/Item/equipmentSlot/type-aliases/EquipmentSlot.md)

Slot to be worn on.

#### Returns

[`Item`](Item.md)
