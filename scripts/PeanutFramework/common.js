export class toJSON {
    static Vector(vector) {
        return vector ? [vector.x, vector.y, vector.z] : undefined;
    }
}
