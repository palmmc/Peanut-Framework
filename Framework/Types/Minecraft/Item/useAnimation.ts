/**
 * Represents the various types of animations that can be used in gameplay.
 * 
 * These animations are typically associated with specific actions performed by the player.
 * 
 * Some examples of animations include:
 * - `"eat"`: Animation for eating food.
 * - `"drink"`: Animation for drinking from a bottle.
 * - `"bow"`: Animation for using a bow.
 * - `"block"`: Animation for blocking with an item (usually a shield).
 * - `"camera"`: Animation related to using a camera.
 * - `"crossbow"`: Animation for using a crossbow.
 * - `"none"`: No animation, typically used when no action is performed.
 * - `"brush"`: Animation for brushing an item.
 * - `"spear"`: Animation for using a spear.
 * - `"spyglass"`: Animation for using a spyglass.
*/
export type UseAnimation =
  | "eat"
  | "drink"
  | "bow"
  | "block"
  | "camera"
  | "crossbow"
  | "none"
  | "brush"
  | "spear"
  | "spyglass";
