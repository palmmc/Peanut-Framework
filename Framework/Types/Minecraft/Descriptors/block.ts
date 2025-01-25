import { VanillaBlockState } from "../../types";

/**
 * Represents a descriptor for a block in Minecraft, which can either be a simple string
 * or an object containing detailed information about the block, such as its name, states, and tags.
 * 
 * The `states` property allows specifying different block states, where each state is associated with
 * a value that can be a string, number, or boolean. The `tags` property allows associating the block
 * with specific tags.
*/
export type BlockDescriptor =
  | string
  | {
      name?: string;
      states?:
        | { [key in VanillaBlockState]: string | number | boolean }
        | { [key: string]: string | number | boolean };
      tags?: string;
    };
