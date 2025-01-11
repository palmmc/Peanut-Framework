[peanut-framework](../../../../modules.md) / [Types/Minecraft/geometry](../index.md) / Geometry

# Type Alias: Geometry

```ts
type Geometry = 
  | {
  bone_visibility: {};
  identifier: string;
 }
  | string;
```

Geometry is an JSON component that specifies the geometry identifier and bone visibility to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.

## Param

Identifier string.

*OR*

## Param

Valid geometry identifier.

## Param

An optional array of Booleans that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility' the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis.
