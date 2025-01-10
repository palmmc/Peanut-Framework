[**peanut-framework**](../../../../README.md)

***

[peanut-framework](../../../../modules.md) / [Types/Minecraft/geometry](../README.md) / Geometry

# Type Alias: Geometry

> **Geometry**: \{ `bone_visibility`: \{\}; `identifier`: `string`; \} \| `string`

Defined in: [Types/Minecraft/geometry.ts:10](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Types/Minecraft/geometry.ts#L10)

Geometry is an JSON component that specifies the geometry identifier and bone visibility to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.

## Param

Identifier string.

*OR*

## Param

Valid geometry identifier.

## Param

An optional array of Booleans that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility' the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis.
