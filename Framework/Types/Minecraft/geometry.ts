/**
 * Geometry is an JSON component that specifies the geometry identifier and bone visibility to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 * @param string - Identifier string.
 *
 * *OR*
 *
 * @param identifier - Valid geometry identifier.
 * @param bone_visibility - An optional array of Booleans that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility' the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis.
 */
export type Geometry =
  | {
      identifier: string;
      bone_visibility?: {
        [key: string]: boolean;
      };
    }
  | string;
