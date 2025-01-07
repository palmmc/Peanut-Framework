import { replaceMinecraftColorCodes } from "../utils";

export class Console {
  public static log(text: string) {
    console.log(replaceMinecraftColorCodes(text));
  }
}
