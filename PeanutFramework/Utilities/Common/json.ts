import { Vector } from "../../Types/types";

export class toJSON {
  public static Vector(vector?: Vector) {
    return vector ? [vector.x, vector.y, vector.z] : undefined;
  }
}
