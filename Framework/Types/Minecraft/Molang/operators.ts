/**
 * Defines the available operators in Molang expressions.
 * 
 * These operators are used for performing arithmetic, logical, comparison, and other operations
 * within Molang expressions.
 * 
 *   - "*"   // Multiplication operator, used to multiply two values.
 *   - "/"   // Division operator, used to divide two values.
 *   - "+"   // Addition operator, used to add two values.
 *   - "-"   // Subtraction operator, used to subtract one value from another.
 *   - "!"   // Logical NOT operator, used to negate a boolean value.
 *   - "||"  // Logical OR operator, used to combine two boolean values.
 *   - "&&"  // Logical AND operator, used to combine two boolean values.
 *   - "<"   // Less than operator, used to compare two values.
 *   - "<="  // Less than or equal to operator, used to compare two values.
 *   - ">="  // Greater than or equal to operator, used to compare two values.
 *   - ">"   // Greater than operator, used to compare two values.
 *   - "=="  // Equality operator, used to check if two values are equal.
 *   - "!="  // Inequality operator, used to check if two values are not equal.
 *   - "??"  // Nullish coalescing operator, returns the right-hand operand if the left-hand operand is null or undefined.
 *   - "->"  // Arrow operator, used in some specific Molang scenarios for function or event declarations.
 */
export type MolangOperator =
  | "*"
  | "/"
  | "+"
  | "-"
  | "!"
  | "||"
  | "&&"
  | "<"
  | "<="
  | ">="
  | ">"
  | "=="
  | "!="
  | "??"
  | "->";
