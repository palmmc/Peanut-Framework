[peanut-framework](../../../../modules.md) / [Classes/Features/item](../index.md) / Item

# Class: Item

## Constructors

### new Item()

```ts
new Item(
   identifier, 
   displayName?, 
   language?): Item
```

#### Parameters

##### identifier

`string`

##### displayName?

`string`

##### language?

[`LanguageKey`](../../../../Types/Minecraft/Language/key/type-aliases/LanguageKey.md)

#### Returns

[`Item`](Item.md)

## Methods

### allowOffHand()

```ts
allowOffHand(value): Item
```

Determine whether an item can be placed in the off-hand slot of the inventory.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### blockPlacer()

```ts
blockPlacer(block, useOn?): Item
```

Block Placer item component. Items with this component will place a block when used.

#### Parameters

##### block

`string`

The block that will be placed.

##### useOn?

[`BlockDescriptor`](../../../../Types/Minecraft/Descriptors/block/type-aliases/BlockDescriptor.md)[]

List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.

#### Returns

[`Item`](Item.md)

***

### bundleInteraction()

```ts
bundleInteraction(numViewableSlots): Item
```

Enables the bundle interface and functionality on the item.

#### Parameters

##### numViewableSlots

`number`

Defines the maximum number of item stacks accessible from the top of the bundle. Slots are accessed in rows filling from the bottom of the tooltip from right to left.

#### Returns

[`Item`](Item.md)

***

### canDestroyInCreative()

```ts
canDestroyInCreative(value): Item
```

Determines if the item will break blocks in Creative Mode while swinging.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### compile()

```ts
compile(project): void
```

Compiles a finished item class to JSON. This process is automatic.

#### Parameters

##### project

[`Project`](../../../project/classes/Project.md)

#### Returns

`void`

***

### cooldown()

```ts
cooldown(category, duration): Item
```

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

```ts
customComponent(component): Item
```

Custom components are a new way of connecting the configuration of Blocks and Items in JSON to the power of scripting in a very direct and targeted manner.

#### Parameters

##### component

`string`[]

String array of custom component IDs.

#### Returns

[`Item`](Item.md)

***

### damage()

```ts
damage(value): Item
```

Determines how much extra damage the item does on attack.

#### Parameters

##### value

`number`

How much extra damage the item does on attack. Note that this must be a positive value.

#### Returns

[`Item`](Item.md)

***

### damageAbsorption()

```ts
damageAbsorption(absorbableCauses): Item
```

Causes the item to absorb damage that would otherwise be dealt to its wearer.

#### Parameters

##### absorbableCauses

`string`[]

List of damage causes (such as entity_attack and magma) that can be absorbed by the item.

#### Returns

[`Item`](Item.md)

***

### digger()

```ts
digger(useEfficiency, destroySpeeds): Item
```

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

```ts
durability(maxDurability, damageChance?): Item
```

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

```ts
durabilitySensor(durabilityThresholds): Item
```

Enables an item to emit effects when it receives damage.

#### Parameters

##### durabilityThresholds

`object`[]

Items define both the durability thresholds, and the effects emitted when each threshold is met.

#### Returns

[`Item`](Item.md)

***

### dyeable()

```ts
dyeable(defaultColor?): Item
```

Allows the item to be dyed by cauldron water.

#### Parameters

##### defaultColor?

`string`

Optional hex color to use by default before the player has dyed the item.

#### Returns

[`Item`](Item.md)

***

### enchantable()

```ts
enchantable(slot, value): Item
```

Determines what enchantments can be applied to the item.

#### Parameters

##### slot

[`EnchantmentSlot`](../../../../Types/Minecraft/Enchantment/slot/type-aliases/EnchantmentSlot.md)

What enchantments can be applied (ex. Using bow would allow this item to be enchanted as if it were a bow).

##### value

`number`

The value of the enchantment (minimum of 0).

#### Returns

[`Item`](Item.md)

***

### entityPlacer()

```ts
entityPlacer(
   entity, 
   dispenseOn?, 
   useOn?): Item
```

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

```ts
food(
   foodOptions, 
   canAlwaysEat, 
   usingConvertsTo?): Item
```

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

```ts
fuel(duration): Item
```

Allows the item to be used as fuel in a furnace to 'cook' other items.

#### Parameters

##### duration

`number`

How long in seconds will this fuel cook items for. Minimum value: 0.05.

#### Returns

[`Item`](Item.md)

***

### glint()

```ts
glint(value): Item
```

Determines whether the item has the enchanted glint render effect on it.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### handEquipped()

```ts
handEquipped(value): Item
```

Determines if an item is rendered like a tool while in-hand.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### hoverTextColor()

```ts
hoverTextColor(color): Item
```

Determines the color of the item name when hovering over it.

#### Parameters

##### color

`string`

Valid colors can be found here: https://minecraft.wiki/w/Formatting_codes#Color_codes

#### Returns

[`Item`](Item.md)

***

### icon()

```ts
icon(
   name, 
   path, 
   options?): Item
```

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

```ts
interactButton(value): Item
```

This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button.

#### Parameters

##### value

When set to true, default \"Use Item\" text will be used.

`string` | `boolean`

#### Returns

[`Item`](Item.md)

***

### liquidClipped()

```ts
liquidClipped(value): Item
```

Determines whether an item interacts with liquid blocks on use.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### maxStackSize()

```ts
maxStackSize(value): Item
```

The maximum number of items that can be held in one stack of this item type.

#### Parameters

##### value

`number`

Integer value.

#### Returns

[`Item`](Item.md)

***

### menuCategory()

```ts
menuCategory(category): Item
```

Assigns this item to a menu category and/or creative item group.

#### Parameters

##### category

[`MenuCategory`](../../../../Types/Minecraft/Definitions/menuCategory/type-aliases/MenuCategory.md)

Category to assign.

#### Returns

[`Item`](Item.md)

***

### projectile()

```ts
projectile(projectileEntity, minimumCriticalPower): Item
```

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

```ts
rarity(rarity): Item
```

Represents how difficult the item is to obtain by changing the color of its name text.

#### Parameters

##### rarity

Rarity of the item.

`"common"` | `"uncommon"` | `"rare"` | `"epic"`

#### Returns

[`Item`](Item.md)

***

### record()

```ts
record(
   comparatorSignal, 
   duration, 
   soundEvent): Item
```

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

```ts
repairable(repairItems): Item
```

Determines whether an item can be repaired in an anvil

#### Parameters

##### repairItems

`object`[]

List of repair item entries.

#### Returns

[`Item`](Item.md)

***

### shooter()

```ts
shooter(
   ammunition, 
   chargeOnDraw, 
   maxDrawDuration, 
   scalePowerByDrawDuration): Item
```

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

```ts
shouldDespawn(value): Item
```

Allows you to specify whether the item should despawn when dropped on the ground.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### stackedByData()

```ts
stackedByData(value): Item
```

Allows you to specify whether the item should stack by data or not.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Item`](Item.md)

***

### storageItem()

```ts
storageItem(
   max_slots, 
   max_weight_limit, 
   weight_in_storage_item, 
   allow_nested_storage_items, 
   banned_items): Item
```

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

```ts
tag(tags): Item
```

Tags are empty JSON Objects that define a tag to be added to an item. The component has no body or parameters, it is simply a flag, and when the item is parsed it will be added to the item's tag list.

#### Parameters

##### tags

A list of tags to be added to the item.

`string`[] | [`VanillaItemTag`](../../../../Types/Minecraft/Item/tags/type-aliases/VanillaItemTag.md)[]

#### Returns

[`Item`](Item.md)

***

### throwable()

```ts
throwable(
   doSwingAnimation, 
   launchPowerScale, 
   maxDrawDuration, 
   maxLaunchPower, 
   minDrawDuration, 
   scalePowerByDrawDuration): Item
```

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

```ts
useAnimation(type): Item
```

Allows the item to use specific animations.

#### Parameters

##### type

[`UseAnimation`](../../../../Types/Minecraft/Item/useAnimation/type-aliases/UseAnimation.md)

Animation type.

#### Returns

[`Item`](Item.md)

***

### useModifiers()

```ts
useModifiers(useDuration, movementModifier): Item
```

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

```ts
wearable(protection, slot): Item
```

Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1.

#### Parameters

##### protection

`number`

Protection value.

##### slot

[`EquipmentSlot`](../../../../Types/Minecraft/Item/equipmentSlot/type-aliases/EquipmentSlot.md)

Slot to be worn on.

#### Returns

[`Item`](Item.md)
