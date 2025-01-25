/**
 * Geometry is a JSON component that specifies the geometry identifier and bone visibility to use to render this block.
 * This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 * 
 * The structure can be defined in one of two ways:
 * 
 * 1. A simple string representing the geometry identifier.
 * 2. An object that includes the geometry identifier and optionally specifies bone visibility.
 * 
 * @param {string} identifier - The valid geometry identifier.
 * 
 * @param {Object} [bone_visibility] - An optional object defining the visibility of individual bones in the geometry file.
 * The visibility is determined on a true/false basis for each bone name in the geometry file.
 * - The geometry file name must be specified as the identifier.
 * - After specifying the identifier, `bone_visibility` can be defined based on the names of the bones in the geometry file.
 * 
 * @example
 * // Example with just the identifier string:
 * const geometry = "geometry:block/cube_all";
 * 
 * @example
 * // Example with identifier and bone visibility:
 * const geometry = {
 *   identifier: "geometry:block/cube_all",
 *   bone_visibility: {
 *     "bone1": true,
 *     "bone2": false
 *   }
 * };
 */
export type Geometry =
  | {
      identifier: string;
      bone_visibility?: {
        [key: string]: boolean;
      };
    }
  | string;
