import { BlockRenderMethods, EntityRenderMethods } from "../types";

type RenderMethods = BlockRenderMethods | EntityRenderMethods;
type MaterialKey = "*" | "up" | "down" | "north" | "south" | "east" | "west";
/**
 * The Material Instances component contains a map of material instance names/face names to material instance definitions (JSON Objects). The material instance * is required and will be used for any materials that don't have a match.
 * @param texture - Texture name for the material.
 * @param ambient_occlusion - If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting.
 * @param face_dimming - This material should be dimmed by the direction it's facing.
 * @param render_method - The render method to use. Must be one of the options listed in the table below. See this page to understand the relationship between render method and render distance.
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
