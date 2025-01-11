[peanut-framework](../../../../modules.md) / [Classes/Properties/language](../index.md) / Language

# Class: Language

Translation class used for generating text translations.

## Param

The string that is used in-game to identify the block.
### Example
```ts
new Block("peanut:example", "Example Block")
```

## Constructors

### new Language()

```ts
new Language(options?): Language
```

#### Parameters

##### options?

###### whitelistAsBlacklist

`boolean`

###### whitelistLanguages

[`LanguageKey`](../../../../Types/Minecraft/Language/key/type-aliases/LanguageKey.md)[]

#### Returns

[`Language`](Language.md)

## Methods

### autoTranslate()

```ts
autoTranslate(): Language
```

#### Returns

[`Language`](Language.md)

***

### compile()

```ts
compile(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

***

### configure()

```ts
configure(options?): Promise<void>
```

#### Parameters

##### options?

###### whitelistAsBlacklist

`boolean`

###### whitelistLanguages

[`LanguageKey`](../../../../Types/Minecraft/Language/key/type-aliases/LanguageKey.md)[]

#### Returns

`Promise`\<`void`\>

***

### translate()

```ts
translate(...translations): void
```

#### Parameters

##### translations

...`object`[]

#### Returns

`void`
