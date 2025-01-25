import { Vector } from "../../Types/types";

/**
 * The `toJSON` class contains utility methods for converting objects into JSON-compatible formats.
 * It provides methods to transform complex objects, such as `Vector`, into simpler representations for serialization.
 */
export class toJSON {
  /**
   * Converts a `Vector` object into an array of its x, y, and z components, suitable for JSON serialization.
   * If no vector is provided, it returns `undefined`.
   * 
   * @param {Vector} [vector] - The `Vector` object to be converted.
   * @returns {number[] | undefined} An array of the `Vector` components `[x, y, z]`, or `undefined` if no vector is provided.
   * 
   * @example
   * const vector = { x: 1, y: 2, z: 3 };
   * const jsonArray = toJSON.Vector(vector);
   * console.log(jsonArray); // [1, 2, 3]
   */
  public static Vector(vector?: Vector): number[] | undefined {
    return vector ? [vector.x, vector.y, vector.z] : undefined;
  }
}
