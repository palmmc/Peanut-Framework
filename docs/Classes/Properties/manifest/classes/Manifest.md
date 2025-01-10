[**peanut-framework**](../../../../README.md)

***

[peanut-framework](../../../../modules.md) / [Classes/Properties/manifest](../README.md) / Manifest

# Class: Manifest

Defined in: [Classes/Properties/manifest.ts:33](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/manifest.ts#L33)

Manifest class used to create a pack manifest.

## Param

The string that is used in-game to identify the block.
### Example
```ts
new Block("peanut:example", "Example Block")
```

## Constructors

### new Manifest()

> **new Manifest**(`options`?): [`Manifest`](Manifest.md)

Defined in: [Classes/Properties/manifest.ts:50](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/manifest.ts#L50)

#### Parameters

##### options?

###### dependencies

\{ `[key: string]`: `Dependency`;  `debug-utilities`: `Dependency`; `server`: `Dependency`; `server-admin`: `Dependency`; `server-editor`: `Dependency`; `server-gametest`: `Dependency`; `server-net`: `Dependency`; `server-ui`: `Dependency`; \}

###### dependencies.debug-utilities

`Dependency`

###### dependencies.server

`Dependency`

###### dependencies.server-admin

`Dependency`

###### dependencies.server-editor

`Dependency`

###### dependencies.server-gametest

`Dependency`

###### dependencies.server-net

`Dependency`

###### dependencies.server-ui

`Dependency`

###### header

\{ `description`: `string`; `min_engine_version`: `number`[]; `name`: `string`; `uuid`: `string`; `version`: `number`[]; \}

###### header.description

`string`

###### header.min_engine_version

`number`[]

###### header.name

`string`

###### header.uuid

`string`

###### header.version

`number`[]

###### metadata

\{ `authors`: `string`[]; `license`: `string`; `url`: `string`; \}

###### metadata.authors

`string`[]

###### metadata.license

`string`

###### metadata.url

`string`

###### modules

\{ `scripts`: \{ `entry`: `string`; \}; \}

###### modules.scripts

\{ `entry`: `string`; \}

###### modules.scripts.entry

`string`

#### Returns

[`Manifest`](Manifest.md)

## Methods

### compile()

> **compile**(`rePath`, `bePath`, `oldManifest`?): `void`

Defined in: [Classes/Properties/manifest.ts:180](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/manifest.ts#L180)

Compiles a finished manifest class to JSON. Use after all other methods on this instance to generate it.

#### Parameters

##### rePath

`string`

##### bePath

`string`

##### oldManifest?

`any`

#### Returns

`void`

***

### properties()

> **properties**(`options`?): `void`

Defined in: [Classes/Properties/manifest.ts:81](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Properties/manifest.ts#L81)

#### Parameters

##### options?

###### dependencies

\{ `[key: string]`: `Dependency`;  `debug-utilities`: `Dependency`; `server`: `Dependency`; `server-admin`: `Dependency`; `server-editor`: `Dependency`; `server-gametest`: `Dependency`; `server-net`: `Dependency`; `server-ui`: `Dependency`; \}

###### dependencies.debug-utilities

`Dependency`

###### dependencies.server

`Dependency`

###### dependencies.server-admin

`Dependency`

###### dependencies.server-editor

`Dependency`

###### dependencies.server-gametest

`Dependency`

###### dependencies.server-net

`Dependency`

###### dependencies.server-ui

`Dependency`

###### header

\{ `description`: `string`; `min_engine_version`: `number`[]; `name`: `string`; `uuid`: `string`; `version`: `number`[]; \}

###### header.description

`string`

###### header.min_engine_version

`number`[]

###### header.name

`string`

###### header.uuid

`string`

###### header.version

`number`[]

###### metadata

\{ `authors`: `string`[]; `license`: `string`; `url`: `string`; \}

###### metadata.authors

`string`[]

###### metadata.license

`string`

###### metadata.url

`string`

###### modules

\{ `scripts`: \{ `entry`: `string`; \}; \}

###### modules.scripts

\{ `entry`: `string`; \}

###### modules.scripts.entry

`string`

#### Returns

`void`
