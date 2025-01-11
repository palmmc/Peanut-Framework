import { VanillaBlockState } from "../../types";

export type BlockDescriptor =
  | string
  | {
      name?: string;
      states?:
        | { [key in VanillaBlockState]: string | number | boolean }
        | { [key: string]: string | number | boolean };
      tags?: string;
    };
