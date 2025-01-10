import {
  MolangFlowStatement,
  MolangMathFunction,
  MolangOperator,
  MolangQueryFunction,
} from "../../Types/types";

/**
 * Molang class used to construct Molang expressions.
 */
export class Molang {
  public expression: string = "";

  constructor(expression?: string) {
    if (expression) this.expression = expression;
  }

  /**
   * Adds a constant string to a Molang expression.
   * @param value String value.
   */
  public constStr(value: number) {
    this.expression += `'${value}' `;
    return this;
  }

  /**
   * Adds a constant boolean to a Molang expression.
   * @param value Boolean value.
   */
  public constBool(value: boolean) {
    this.expression += value.toString() + " ";
    return this;
  }

  /**
   * Adds a constant number to a Molang expression.
   * @param value Int or float value.
   */
  public constNum(value: number) {
    this.expression += value.toString() + " ";
    return this;
  }

  /**
   * Calls a variable in a Molang expression.
   * @param name Variable name to call.
   */
  public variable(name: string) {
    this.expression += `variable.${name} `;
    return this;
  }

  /**
   * Adds a query function to a Molang expression.
   * @param queryFunction Function to query.
   * @param invented Whether to invert the result of the evaluation.
   * @param args Argument(s) to pass to the function.
   */
  public query(
    queryFunction: MolangQueryFunction,
    inverted?: boolean,
    ...args: any[]
  ) {
    if (inverted === true) this.expression += "!";
    this.expression += `query.${queryFunction}(${args
      .map((x) => `'${x}'`)
      .join(", ")}) `;
    return this;
  }

  /**
   * Adds a math function to a Molang expression.
   * @param mathFunction Function to execute.
   * @param args Argument(s) to pass to the function.
   */
  public math(mathFunction: MolangMathFunction, ...args: any[]) {
    this.expression += `math.${mathFunction}(${args.join(", ")}) `;
    return this;
  }

  /**
   * Adds an operator to a Molang expression.
   * @param operator Operator to add.
   */
  public operator(operator: MolangOperator) {
    this.expression += `${operator} `;
    return this;
  }

  /**
   * Adds a flow statement to a Molang expression.
   * @param statement Statement to add.
   */
  public flowStatement(statement: MolangFlowStatement) {
    this.expression += statement + " ";
    return this;
  }

  /**
   * Adds a string directly to a Molang expression.
   * @param str String to add.
   */
  public string(str: string) {
    this.expression += str + " ";
    return this;
  }

  /**
   * Performs a logical operation or comparison between two expressions or values.
   * @param value1 Molang expression or value to compare with.
   * @param value2 Molang expression or value to compare against.
   * @param operator Molang operator for comparison.
   */
  public static logic(
    value1: Molang | string | number | boolean,
    value2: Molang | string | number | boolean,
    operator: MolangOperator
  ) {
    let expression = "";
    if (value1 instanceof Molang) expression += value1.expression;
    else if (typeof value1 === "string") expression += `'${value1}' `;
    else expression += value1.toString() + " ";
    expression += operator + " ";
    if (value2 instanceof Molang) expression += value2.expression;
    else if (typeof value2 === "string") expression += `'${value2}' `;
    else expression += value2.toString() + " ";
    return new Molang(expression);
  }

  /**
   * Adds a conditional expression using a binary or ternary operator.
   * @param condition Condition to evaluate.
   * @param ifTrue Evaluate true condition.
   * @param ifFalse Evaluate false condition.
   */
  public static conditional(
    condition: string,
    ifTrue: string,
    ifFalse?: string
  ) {
    let expression = "";
    if (ifFalse) expression += `${condition} ? ${ifTrue} : ${ifFalse} `;
    else expression += `${condition} ? ${ifTrue} `;
    return new Molang(expression);
  }
}
