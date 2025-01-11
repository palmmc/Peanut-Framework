[peanut-framework](../../../../modules.md) / [Classes/Properties/manifest](../index.md) / Manifest

# Class: Manifest

Manifest class used to create a pack manifest.

## Param

The string that is used in-game to identify the block.
### Example
```ts
new Block("peanut:example", "Example Block")
```

## Constructors

### new Manifest()

```ts
new Manifest(options?): Manifest
```

#### Parameters

##### options?

###### dependencies

\{
`[key: string]`: `Dependency`;   `debug-utilities`: `Dependency`;
  `server`: `Dependency`;
  `server-admin`: `Dependency`;
  `server-editor`: `Dependency`;
  `server-gametest`: `Dependency`;
  `server-net`: `Dependency`;
  `server-ui`: `Dependency`;
 \}

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

\{
  `description`: `string`;
  `min_engine_version`: `number`[];
  `name`: `string`;
  `uuid`: `string`;
  `version`: `number`[];
 \}

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

\{
  `authors`: `string`[];
  `license`: `string`;
  `url`: `string`;
 \}

###### metadata.authors

`string`[]

###### metadata.license

`string`

###### metadata.url

`string`

###### modules

\{
  `scripts`: \{
     `entry`: `string`;
    \};
 \}

###### modules.scripts

\{
  `entry`: `string`;
 \}

###### modules.scripts.entry

`string`

#### Returns

[`Manifest`](Manifest.md)

## Methods

### compile()

```ts
compile(
   rePath, 
   bePath, 
   oldManifest?): void
```

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

```ts
properties(options?): void
```

#### Parameters

##### options?

###### dependencies

\{
`[key: string]`: `Dependency`;   `debug-utilities`: `Dependency`;
  `server`: `Dependency`;
  `server-admin`: `Dependency`;
  `server-editor`: `Dependency`;
  `server-gametest`: `Dependency`;
  `server-net`: `Dependency`;
  `server-ui`: `Dependency`;
 \}

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

\{
  `description`: `string`;
  `min_engine_version`: `number`[];
  `name`: `string`;
  `uuid`: `string`;
  `version`: `number`[];
 \}

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

\{
  `authors`: `string`[];
  `license`: `string`;
  `url`: `string`;
 \}

###### metadata.authors

`string`[]

###### metadata.license

`string`

###### metadata.url

`string`

###### modules

\{
  `scripts`: \{
     `entry`: `string`;
    \};
 \}

###### modules.scripts

\{
  `entry`: `string`;
 \}

###### modules.scripts.entry

`string`

#### Returns

`void`
