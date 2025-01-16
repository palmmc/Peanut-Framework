[peanut-framework](../../../../modules.md) / [Classes/Properties/language](../index.md) / Language

# Class: Language

Translation class used for generating text translations.

Generates multiple `xx_XX.lang` files based on specified translations.

### Example
```ts
project.language.translate({
 entries: [
   {
     key: "accessibility.chat.howtoopen",
     text: "Press T to tell us you like Cookies!",
     overrideTranslation: [{ source: "en_GB", text: "Press T to tell us you like Biscuits!" }],
   },
 ],
});
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
