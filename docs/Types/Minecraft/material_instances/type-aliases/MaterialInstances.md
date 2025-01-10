[**peanut-framework**](../../../../README.md)

***

[peanut-framework](../../../../modules.md) / [Types/Minecraft/material\_instances](../README.md) / MaterialInstances

# Type Alias: MaterialInstances

> **MaterialInstances**: \{ \[key in MaterialKey\]?: \{ ambient\_occlusion?: boolean \| number; face\_dimming?: boolean; render\_method?: RenderMethods; texture: string \} \} \| \{\}

Defined in: [Types/Minecraft/material\_instances.ts:12](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Types/Minecraft/material_instances.ts#L12)

The Material Instances component contains a map of material instance names/face names to material instance definitions (JSON Objects). The material instance * is required and will be used for any materials that don't have a match.

## Param

Texture name for the material.

## Param

If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting.

## Param

This material should be dimmed by the direction it's facing.

## Param

The render method to use. Must be one of the options listed in the table below. See this page to understand the relationship between render method and render distance.
