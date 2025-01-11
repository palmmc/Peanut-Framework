[peanut-framework](../../../../../modules.md) / [Types/Minecraft/Block/traits](../index.md) / VanillaBlockTraits

# Type Alias: VanillaBlockTraits

```ts
type VanillaBlockTraits = object;
```

## Type declaration

### minecraft:placement\_direction?

```ts
optional minecraft:placement_direction: object;
```

#### minecraft:placement\_direction.enabled\_states

```ts
enabled_states: ("minecraft:cardinal_direction" | "minecraft:facing_direction")[];
```

#### minecraft:placement\_direction.y\_rotation\_offset?

```ts
optional y_rotation_offset: 90 | 180 | -90;
```

### minecraft:placement\_position?

```ts
optional minecraft:placement_position: object;
```

#### minecraft:placement\_position.enabled\_states

```ts
enabled_states: ("minecraft:block_face" | "minecraft:vertical_half")[];
```
