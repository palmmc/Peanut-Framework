import { BlockRenderMethods, EntityRenderMethods } from "../types";

type RenderMethods = BlockRenderMethods | EntityRenderMethods;
type MaterialKey = "*" | "up" | "down" | "north" | "south" | "east" | "west";

/**
 * The Material Instances component contains a map of material instance names/face names to material instance definitions (JSON Objects).
 * The material instance "*" is required and will be used for any materials that don't have a match.
 * 
 * Each material instance may include the following properties:
 * - `texture`: Specifies the texture for the material.
 * - `ambient_occlusion`: If applied, ambient occlusion will be used when lighting is calculated, creating shadows around and underneath the block.
 * - `face_dimming`: If true, this material should be dimmed based on the direction it's facing.
 * - `render_method`: Defines the render method to use, which can be one of the available options from `BlockRenderMethods` or `EntityRenderMethods`. The render method controls how the material is rendered and its associated distance in the world.
 * 
 * The structure of the `MaterialInstances` type can either use predefined face names as keys (e.g., "up", "down", "north", "south", "east", "west") or an object with custom keys.
 * 
 * @param {string} texture - The texture name for the material.
 * @param {boolean | number} [ambient_occlusion] - If true or a numeric value is provided, ambient occlusion is applied. The numeric value controls the exponent applied to the lighting.
 * @param {boolean} [face_dimming] - If true, the material will be dimmed depending on the direction it is facing.
 * @param {RenderMethods} [render_method] - Specifies the render method for the material. This must be one of the available options for either block or entity rendering.
 * 
 * @example
 * // Example with face-based material definitions:
 * const materialInstances = {
 *   "*": { texture: "default_texture" },
 *   "up": { texture: "top_texture", ambient_occlusion: 0.5, render_method: "blend" },
 *   "north": { texture: "side_texture", face_dimming: true }
 * };
 * 
 * @example
 * // Example with a custom key-based material definition:
 * const materialInstances = {
 *   "custom_face_1": { texture: "custom_texture", ambient_occlusion: true, render_method: "alpha_test" }
 * };
 */
export type MaterialInstances =
  | {
      [key in MaterialKey]?: {
        texture: string;
        ambient_occlusion?: boolean | number;
        face_dimming?: boolean;
        render_method?: RenderMethods;
      };
    }
  | {
      [key: string]: {
        texture: string;
        ambient_occlusion?: boolean | number;
        face_dimming?: boolean;
        render_method?: RenderMethods;
      };
    };
