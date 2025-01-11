[peanut-framework](../../../../../modules.md) / [Types/Minecraft/Descriptors/block](../index.md) / BlockDescriptor

# Type Alias: BlockDescriptor

```ts
type BlockDescriptor = 
  | string
  | {
  name: string;
  states: { [key in VanillaBlockState]: string | number | boolean } | {};
  tags: string;
};
```
