[**peanut-framework**](../../../../README.md)

***

[peanut-framework](../../../../modules.md) / [Classes/Properties/language](../README.md) / Language

# Class: Language

Defined in: [Classes/Properties/language.ts:14](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/language.ts#L14)

Translation class used for generating text translations.

## Param

The string that is used in-game to identify the block.
### Example
```ts
new Block("peanut:example", "Example Block")
```

## Constructors

### new Language()

> **new Language**(`options`?): [`Language`](Language.md)

Defined in: [Classes/Properties/language.ts:31](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/language.ts#L31)

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

> **autoTranslate**(): [`Language`](Language.md)

Defined in: [Classes/Properties/language.ts:59](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/language.ts#L59)

#### Returns

[`Language`](Language.md)

***

### compile()

> **compile**(): `Promise`\<`void`\>

Defined in: [Classes/Properties/language.ts:80](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/language.ts#L80)

#### Returns

`Promise`\<`void`\>

***

### configure()

> **configure**(`options`?): `Promise`\<`void`\>

Defined in: [Classes/Properties/language.ts:37](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/language.ts#L37)

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

> **translate**(...`translations`): `void`

Defined in: [Classes/Properties/language.ts:63](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/language.ts#L63)

#### Parameters

##### translations

...`object`[]

#### Returns

`void`
