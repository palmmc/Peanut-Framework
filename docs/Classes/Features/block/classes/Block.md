[peanut-framework](../../../../modules.md) / [Classes/Features/block](../index.md) / Block

# Class: Block

Block class used for creating custom blocks.

## Param

The string that is used in-game to identify the block.

## Param

Optional (but recommended), the string to show up as the display name of the block in-game.

## Param

Optional, the language the display name originates from. Defaults to `en_US`.
### Example
```ts
new Block("peanut:example", "Example Block")
```

## Constructors

### new Block()

```ts
new Block(
   identifier, 
   displayName?, 
   language?): Block
```

#### Parameters

##### identifier

`string`

##### displayName?

`string`

##### language?

[`LanguageKey`](../../../../Types/Minecraft/Language/key/type-aliases/LanguageKey.md)

#### Returns

[`Block`](Block.md)

## Methods

### collisionBox()

```ts
collisionBox(origin, size): Block
```

Defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.

#### Parameters

##### origin

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

Minimal position of the bounds of the collision box. "origin" is specified as {x: number, y: number, z: number} and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.

##### size

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

Size of each side of the collision box. Size is specified as {x: number, y: number, z: number}. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.

#### Returns

[`Block`](Block.md)

***

### compile()

```ts
compile(project): void
```

Compiles a finished block class to JSON. This process is automatic.

#### Parameters

##### project

[`Project`](../../../project/classes/Project.md)

#### Returns

`void`

***

### craftingTable()

```ts
craftingTable(craftingTags, tableName): Block
```

Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. This component supports only "recipe_shaped" and "recipe_shapeless" typed recipes and not others like "recipe_furnace" or "recipe_brewing_mix". If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.

#### Parameters

##### craftingTags

`string`[]

Defines the tags recipes should define to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters.

##### tableName

`string`

Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the "display_name" component. If this block has no "display_name" component, the name displayed will default to the name of the block.

#### Returns

[`Block`](Block.md)

***

### customComponents()

```ts
customComponents(components): Block
```

Sets an ordered list of custom component names which are bound in script to be executed upon a block event.

#### Parameters

##### components

`string`[]

String array of custom component IDs.

#### Returns

[`Block`](Block.md)

***

### destructibleByExplosion()

```ts
destructibleByExplosion(explosionResistance): Block
```

Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.

#### Parameters

##### explosionResistance

`number`

Sets the explosion resistance for the block. Greater values result in greater resistance to explosions. The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance.

#### Returns

[`Block`](Block.md)

***

### destructibleByMining()

```ts
destructibleByMining(secondsToDestroy, itemSpecificSpeeds?): Block
```

Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.

#### Parameters

##### secondsToDestroy

`number`

Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.

##### itemSpecificSpeeds?

`object`[]

Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.

#### Returns

[`Block`](Block.md)

***

### flammable()

```ts
flammable(catchChanceModifier, destroyChanceModifier): Block
```

Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

#### Parameters

##### catchChanceModifier

`number`

A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. For a "catch_chance_modifier" greater than 0, the fire will continue to burn until the block is destroyed (or it will burn forever if the "destroy_chance_modifier" is 0). If the "catch_chance_modifier" is 0, and the block is directly ignited, the fire will eventually burn out without destroying the block (or it will have a chance to be destroyed if "destroy_chance_modifier" is greater than 0). The default value of 5 is the same as that of Planks.

##### destroyChanceModifier

`number`

A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. For a "destroy_chance_modifier" of 0, the block will never be destroyed by fire, and the fire will burn forever if the "catch_chance_modifier" is greater than 0. The default value of 20 is the same as that of Planks.

#### Returns

[`Block`](Block.md)

***

### friction()

```ts
friction(friction): Block
```

Describes the friction for this block in a range of (0.0-0.9). Friction affects an entity's movement speed when it travels on the block. Greater value results in more friction.

#### Parameters

##### friction

`number`

Value of friction from 0.0-0.9, with higher values resulting in more friction.

#### Returns

[`Block`](Block.md)

***

### geometry()

```ts
geometry(geometry): Block
```

The description identifier of the geometry to use to render this block. This identifier must either match an existing geometry identifier in any of the loaded resource packs or be one of the currently supported Vanilla identifiers: "minecraft:geometry.full_block" or "minecraft:geometry.cross".

#### Parameters

##### geometry

[`Geometry`](../../../../Types/Minecraft/geometry/type-aliases/Geometry.md)

Geometry object or identifier to use to render this block.

#### Returns

[`Block`](Block.md)

***

### itemVisual()

```ts
itemVisual(geometry, materialInstances): Block
```

The description identifier of the geometry and material used to render the item of this block.
 ### **Requires `Upcoming Features` toggle**

#### Parameters

##### geometry

[`Geometry`](../../../../Types/Minecraft/geometry/type-aliases/Geometry.md)

The Geometry component that will be used for the item.

##### materialInstances

[`MaterialInstances`](../../../../Types/Minecraft/material_instances/type-aliases/MaterialInstances.md)

The Material Instances component that will be used for the item.

#### Returns

[`Block`](Block.md)

***

### lightDampening()

```ts
lightDampening(lightDampening): Block
```

The amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more.

#### Parameters

##### lightDampening

`number`

Amount of light to be dampened.

#### Returns

[`Block`](Block.md)

***

### lightEmission()

```ts
lightEmission(lightEmission): Block
```

The amount of light this block will emit in a range (0-15). Higher value means more light will be emitted.

#### Parameters

##### lightEmission

`number`

Amount of light to be emitted.

#### Returns

[`Block`](Block.md)

***

### liquidDetection()

```ts
liquidDetection(detectionRules): Block
```

Liquid detection is a component that defines how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type. If multiple are specified, the first will be used and the rest will be ignored.
### **Requires `Upcoming Features` toggle**

#### Parameters

##### detectionRules

`object`[]

Detection rule array for when this block comes in contact with a certain liquid.

#### Returns

[`Block`](Block.md)

***

### loot()

```ts
loot(loot): Block
```

Defines a loot table for a block to drop when broken.

#### Parameters

##### loot

`string`

The path to the loot table, relative to the behavior pack. Path string is limited to 256 characters.

#### Returns

[`Block`](Block.md)

***

### mapColor()

```ts
mapColor(color): Block
```

Sets the color of the block when rendered to a map. The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map.

#### Parameters

##### color

Color of the block when rendered to a map.

`string` | `number`[]

#### Returns

[`Block`](Block.md)

***

### materialInstances()

```ts
materialInstances(materialInstances): Block
```

⚠️ **Incompatible with other texture methods.**

The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".

#### Parameters

##### materialInstances

[`MaterialInstances`](../../../../Types/Minecraft/material_instances/type-aliases/MaterialInstances.md)

The Material Instances component contains a map of material instance names/face names to material instance definitions (JSON Objects). The material instance * is required and will be used for any materials that don't have a match.

#### Returns

[`Block`](Block.md)

***

### menuCategory()

```ts
menuCategory(category): Block
```

Assigns this block to a menu category and/or creative item group.

#### Parameters

##### category

[`MenuCategory`](../../../../Types/Minecraft/Definitions/menuCategory/type-aliases/MenuCategory.md)

Category to assign.

#### Returns

[`Block`](Block.md)

***

### multiTexture()

```ts
multiTexture(sides): Block
```

⚠️ **Incompatible with Material Instances.**

Creates a simple multi texture for a block.

#### Parameters

##### sides

Name and path definitions for each texture or side that you want to specify.

\{
`all`: \{
`name`: `string`;
`path`: `string`;
\};
`down`: \{
`name`: `string`;
`path`: `string`;
\};
`east`: \{
`name`: `string`;
`path`: `string`;
\};
`north`: \{
`name`: `string`;
`path`: `string`;
\};
`side`: \{
`name`: `string`;
`path`: `string`;
\};
`south`: \{
`name`: `string`;
`path`: `string`;
\};
`up`: \{
`name`: `string`;
`path`: `string`;
\};
`west`: \{
`name`: `string`;
`path`: `string`;
\};
\} | \{\}

#### Returns

[`Block`](Block.md)

***

### permutations()

```ts
permutations(permutations): Block
```

Defines permutations for this block. Block permutations allow you to change your block's behavior through components when a condition is present.

#### Parameters

##### permutations

(
  \| [`Permutation`](../permutation/classes/Permutation.md)
  \| \{
  `components`: \{\};
  `condition`: `string`;
 \})[]

List of permutations to apply to block.

#### Returns

[`Block`](Block.md)

***

### placementFilter()

```ts
placementFilter(conditions): Block
```

Sets rules for under what conditions the block can be placed/survive

#### Parameters

##### conditions

`object`[]

List of conditions where the block can be placed/survive. Limited to 64 conditions.

#### Returns

[`Block`](Block.md)

***

### redstoneConductivity()

```ts
redstoneConductivity(redstoneConductor, allowsWireToStepDown): Block
```

The basic redstone properties of a block; if the component is not provided the default values are used.

#### Parameters

##### redstoneConductor

`boolean`

Specifies if the block can be powered by redstone.

##### allowsWireToStepDown

`boolean`

Specifies if redstone wire can stair-step downward on the block.

#### Returns

[`Block`](Block.md)

***

### rotatableTexture()

```ts
rotatableTexture(type, sides): Block
```

⚠️ **Incompatible with Material Instances.**

Makes your block rotatable.

#### Parameters

##### type

Mode of rotation to use.

`"cardinal"` | `"log"` | `"facing"`

##### sides

Side textures for your block.

\{
`all`: \{
`name`: `string`;
`path`: `string`;
\};
`down`: \{
`name`: `string`;
`path`: `string`;
\};
`east`: \{
`name`: `string`;
`path`: `string`;
\};
`north`: \{
`name`: `string`;
`path`: `string`;
\};
`side`: \{
`name`: `string`;
`path`: `string`;
\};
`south`: \{
`name`: `string`;
`path`: `string`;
\};
`up`: \{
`name`: `string`;
`path`: `string`;
\};
`west`: \{
`name`: `string`;
`path`: `string`;
\};
\} | \{\}

#### Returns

[`Block`](Block.md)

***

### selectionBox()

```ts
selectionBox(origin, size): Block
```

Selection Box is a JSON Object component that defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.

#### Parameters

##### origin

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

Minimal position of the bounds of the selection box. "origin" is specified as {x: number, y: number, z: number} and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.

##### size

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

Size of each side of the selection box. Size is specified as {x: number, y: number, z: number}. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.

#### Returns

[`Block`](Block.md)

***

### singleTexture()

```ts
singleTexture(name, path): Block
```

⚠️ **Incompatible with Material Instances.**

Creates a simple single texture for a block.

#### Parameters

##### name

`string`

Name used to register the texture.

##### path

`string`

Relative to the `/resources/` folder within this project. (Ex. `./resources/peanut` -> "peanut")

#### Returns

[`Block`](Block.md)

***

### states()

```ts
states(states): Block
```

Defines block states for this block. Block states allow your blocks to have variants, each with its own functionality and appearance through use of permutations.

#### Parameters

##### states

\[\{
  `key`: `string`;
  `values`:   \| `string`[]
     \| `number`[]
     \| `boolean`[]
     \| \{
     `values`: \{
        `max`: `number`;
        `min`: `number`;
       \};
    \};
 \}\]

List of states to apply to block.

#### Returns

[`Block`](Block.md)

***

### tag()

```ts
tag(tags): Block
```

Tags are empty JSON Objects that define a tag to be added to a block. The component has no body or parameters, it is simply a flag, and when the block is parsed it will be added to the block's tag list.

#### Parameters

##### tags

A list of tags to be added to the block.

`string`[] | [`VanillaBlockTag`](../../../../Types/Minecraft/Block/tags/type-aliases/VanillaBlockTag.md)[]

#### Returns

[`Block`](Block.md)

***

### tick()

```ts
tick(intervalRange, looping): Block
```

Causes the block to tick after a random delay in the range specified by interval_range.

#### Parameters

##### intervalRange

Two durations (in ticks) which will be used as the minimum and maximum delays for randomness.

###### max

`number`

###### min

`number`

##### looping

`boolean`

Whether this block should continuously tick, rather than only ticking once.

#### Returns

[`Block`](Block.md)

***

### traits()

```ts
traits(traits): Block
```

Block traits can be used to apply vanilla block states (such as direction) to your custom blocks easily, without the need for events and triggers.

#### Parameters

##### traits

[`VanillaBlockTraits`](../../../../Types/Minecraft/Block/traits/type-aliases/VanillaBlockTraits.md)

List of traits to apply to block.

#### Returns

[`Block`](Block.md)

***

### transformation()

```ts
transformation(options): Block
```

Transformation supports rotation, scaling, and translation. Rotation and scaling around a pivot is also supported. The component can be added to a whole block and/or to individual block permutations. Transformed geometries retain the same restrictions that non-transformed geometries have, such as a maximum size of 30/16 units.

#### Parameters

##### options

###### rotation

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

###### rotationPivot

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

###### scale

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

###### scalePivot

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

###### translation

[`Vector`](../../../../Types/Common/vector/type-aliases/Vector.md)

#### Returns

[`Block`](Block.md)

***

### variatedTexture()

```ts
variatedTexture(name, variations): Block
```

⚠️ **Incompatible with Material Instances.**

Creates a simple single texture for a block.

#### Parameters

##### name

`string`

Name used to register the texture.

##### variations

`object`[]

#### Returns

[`Block`](Block.md)
