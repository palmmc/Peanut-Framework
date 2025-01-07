import { Vector } from "./vector";

export class toJSON {
  public static Vector(vector?: Vector) {
    return vector ? [vector.x, vector.y, vector.z] : undefined;
  }
}
