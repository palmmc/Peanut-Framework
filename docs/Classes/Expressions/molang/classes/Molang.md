[peanut-framework](../../../../modules.md) / [Classes/Expressions/molang](../index.md) / Molang

# Class: Molang

Molang class used to construct Molang expressions.

## Constructors

### new Molang()

```ts
new Molang(expression?): Molang
```

#### Parameters

##### expression?

`string`

#### Returns

[`Molang`](Molang.md)

## Properties

### expression

```ts
expression: string = "";
```

## Methods

### constBool()

```ts
constBool(value): Molang
```

Adds a constant boolean to a Molang expression.

#### Parameters

##### value

`boolean`

Boolean value.

#### Returns

[`Molang`](Molang.md)

***

### constNum()

```ts
constNum(value): Molang
```

Adds a constant number to a Molang expression.

#### Parameters

##### value

`number`

Int or float value.

#### Returns

[`Molang`](Molang.md)

***

### constStr()

```ts
constStr(value): Molang
```

Adds a constant string to a Molang expression.

#### Parameters

##### value

`number`

String value.

#### Returns

[`Molang`](Molang.md)

***

### flowStatement()

```ts
flowStatement(statement): Molang
```

Adds a flow statement to a Molang expression.

#### Parameters

##### statement

[`MolangFlowStatement`](../../../../Types/Minecraft/Molang/flowStatements/type-aliases/MolangFlowStatement.md)

Statement to add.

#### Returns

[`Molang`](Molang.md)

***

### math()

```ts
math(mathFunction, ...args): Molang
```

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

```ts
operator(operator): Molang
```

Adds an operator to a Molang expression.

#### Parameters

##### operator

[`MolangOperator`](../../../../Types/Minecraft/Molang/operators/type-aliases/MolangOperator.md)

Operator to add.

#### Returns

[`Molang`](Molang.md)

***

### query()

```ts
query(
   queryFunction, 
   inverted?, ...
   args?): Molang
```

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

```ts
string(str): Molang
```

Adds a string directly to a Molang expression.

#### Parameters

##### str

`string`

String to add.

#### Returns

[`Molang`](Molang.md)

***

### variable()

```ts
variable(name): Molang
```

Calls a variable in a Molang expression.

#### Parameters

##### name

`string`

Variable name to call.

#### Returns

[`Molang`](Molang.md)

***

### conditional()

```ts
static conditional(
   condition, 
   ifTrue, 
   ifFalse?): Molang
```

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

```ts
static logic(
   value1, 
   value2, 
   operator): Molang
```

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
