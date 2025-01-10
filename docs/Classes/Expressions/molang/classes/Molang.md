[**peanut-framework**](../../../../README.md)

***

[peanut-framework](../../../../modules.md) / [Classes/Expressions/molang](../README.md) / Molang

# Class: Molang

Defined in: [Classes/Expressions/molang.ts:11](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L11)

Molang class used to construct Molang expressions.

## Constructors

### new Molang()

> **new Molang**(`expression`?): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:14](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L14)

#### Parameters

##### expression?

`string`

#### Returns

[`Molang`](Molang.md)

## Properties

### expression

> **expression**: `string` = `""`

Defined in: [Classes/Expressions/molang.ts:12](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L12)

## Methods

### constBool()

> **constBool**(`value`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:31](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L31)

Adds a constant boolean to a Molang expression.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Molang`](Molang.md)

***

### constNum()

> **constNum**(`value`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:40](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L40)

Adds a constant number to a Molang expression.

#### Parameters

##### value

`number`

Int or float value.

#### Returns

[`Molang`](Molang.md)

***

### constStr()

> **constStr**(`value`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:22](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L22)

Adds a constant string to a Molang expression.

#### Parameters

##### value

`number`

String value.

#### Returns

[`Molang`](Molang.md)

***

### flowStatement()

> **flowStatement**(`statement`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:95](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L95)

Adds a flow statement to a Molang expression.

#### Parameters

##### statement

[`MolangFlowStatement`](../../../../Types/Minecraft/Molang/flowStatements/type-aliases/MolangFlowStatement.md)

Statement to add.

#### Returns

[`Molang`](Molang.md)

***

### math()

> **math**(`mathFunction`, ...`args`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:77](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L77)

Adds a math function to a Molang expression.

#### Parameters

##### mathFunction

[`MolangMathFunction`](../../../../Types/Minecraft/Molang/math/type-aliases/MolangMathFunction.md)

Function to execute.

##### args

...`any`[]

Argument(s) to pass to the function.

#### Returns

[`Molang`](Molang.md)

***

### operator()

> **operator**(`operator`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:86](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L86)

Adds an operator to a Molang expression.

#### Parameters

##### operator

[`MolangOperator`](../../../../Types/Minecraft/Molang/operators/type-aliases/MolangOperator.md)

Operator to add.

#### Returns

[`Molang`](Molang.md)

***

### query()

> **query**(`queryFunction`, `inverted`?, ...`args`?): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:60](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L60)

Adds a query function to a Molang expression.

#### Parameters

##### queryFunction

[`MolangQueryFunction`](../../../../Types/Minecraft/Molang/queries/type-aliases/MolangQueryFunction.md)

Function to query.

##### inverted?

`boolean`

##### args?

...`any`[]

Argument(s) to pass to the function.

#### Returns

[`Molang`](Molang.md)

***

### string()

> **string**(`str`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:104](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L104)

Adds a string directly to a Molang expression.

#### Parameters

##### str

`string`

String to add.

#### Returns

[`Molang`](Molang.md)

***

### variable()

> **variable**(`name`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:49](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L49)

Calls a variable in a Molang expression.

#### Parameters

##### name

`string`

Variable name to call.

#### Returns

[`Molang`](Molang.md)

***

### conditional()

> `static` **conditional**(`condition`, `ifTrue`, `ifFalse`?): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:137](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L137)

Adds a conditional expression using a binary or ternary operator.

#### Parameters

##### condition

`string`

Condition to evaluate.

##### ifTrue

`string`

Evaluate true condition.

##### ifFalse?

`string`

Evaluate false condition.

#### Returns

[`Molang`](Molang.md)

***

### logic()

> `static` **logic**(`value1`, `value2`, `operator`): [`Molang`](Molang.md)

Defined in: [Classes/Expressions/molang.ts:115](https://github.com/palmmc/Peanut-Framework/blob/a953dc2db1f7e00237b91b5b1f38f50520700085/PeanutFramework/Classes/Expressions/molang.ts#L115)

Performs a logical operation or comparison between two expressions or values.

#### Parameters

##### value1

Molang expression or value to compare with.

`string` | `number` | `boolean` | [`Molang`](Molang.md)

##### value2

Molang expression or value to compare against.

`string` | `number` | `boolean` | [`Molang`](Molang.md)

##### operator

[`MolangOperator`](../../../../Types/Minecraft/Molang/operators/type-aliases/MolangOperator.md)

Molang operator for comparison.

#### Returns

[`Molang`](Molang.md)
