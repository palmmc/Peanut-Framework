/**
 * Defines the available flow control statements used in Molang expressions.
 * 
 * These statements allow for controlling the execution flow within Molang logic.
 * 
 *   - "loop"       // Represents a loop that iterates over a set of values or executes indefinitely.
 *   - "for_each"   // Executes a block of code for each element in a collection or array.
 *   - "break"      // Exits the nearest loop or control structure, stopping further iterations or execution.
 *   - "continue"   // Skips the remaining code inside the current iteration of a loop and proceeds to the next iteration.
 *   - "return"     // Exits from a function or expression, returning a value or ending execution at that point.
 */
export type MolangFlowStatement =
  | "loop"
  | "for_each"
  | "break"
  | "continue"
  | "return";
