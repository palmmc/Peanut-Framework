/**
 * Defines the available mathematical functions in Molang expressions.
 * 
 * These functions provide a wide range of mathematical operations and utilities, including trigonometric functions,
 * random number generation, and more.
 * 
 *   - "abs"              // Returns the absolute value of a number.
 *   - "acos"             // Returns the arc cosine (inverse cosine) of a number.
 *   - "asin"             // Returns the arc sine (inverse sine) of a number.
 *   - "atan"             // Returns the arc tangent (inverse tangent) of a number.
 *   - "atan2"            // Returns the arc tangent of the quotient of its arguments, in radians.
 *   - "ceil"             // Returns the smallest integer greater than or equal to the number.
 *   - "clamp"            // Restricts a value within a specified range (minimum and maximum).
 *   - "cos"              // Returns the cosine of an angle (in radians).
 *   - "die_roll"         // Simulates a die roll, returning a random number between 1 and 6.
 *   - "die_roll_integer" // Simulates a die roll, returning a random integer between 1 and a specified number.
 *   - "exp"              // Returns the value of e raised to the power of the given number.
 *   - "floor"            // Returns the largest integer less than or equal to the number.
 *   - "hermite_blend"    // Returns the result of a Hermite interpolation between two values.
 *   - "lerp"             // Performs linear interpolation between two values.
 *   - "lerp_rotate"      // Performs a linear interpolation of rotation between two angles.
 *   - "ln"               // Returns the natural logarithm (base e) of a number.
 *   - "max"              // Returns the largest of the numbers passed.
 *   - "min"              // Returns the smallest of the numbers passed.
 *   - "mod"              // Returns the remainder of dividing two numbers (modulus).
 *   - "pi"               // Returns the value of pi (approximately 3.14159).
 *   - "pow"              // Returns the result of raising a number to a specified power.
 *   - "random"           // Returns a random floating-point number between 0 and 1.
 *   - "random_integer"   // Returns a random integer between two specified numbers.
 *   - "round"            // Rounds a number to the nearest integer.
 *   - "sin"              // Returns the sine of an angle (in radians).
 *   - "sqrt"             // Returns the square root of a number.
 *   - "trunc"            // Truncates the decimal portion of a number, returning the integer part.
 */
export type MolangMathFunction =
  | "abs"
  | "acos"
  | "asin"
  | "atan"
  | "atan2"
  | "ceil"
  | "clamp"
  | "cos"
  | "die_roll"
  | "die_roll_integer"
  | "exp"
  | "floor"
  | "hermite_blend"
  | "lerp"
  | "lerp_rotate"
  | "ln"
  | "max"
  | "min"
  | "mod"
  | "pi"
  | "pow"
  | "random"
  | "random_integer"
  | "round"
  | "sin"
  | "sqrt"
  | "trunc";
