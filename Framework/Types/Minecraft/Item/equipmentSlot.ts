/**
 * Represents the possible equipment slots where items can be worn or equipped.
 * 
 * The available slots include weapon and armor slots.
 * 
 * - `"slot.weapon.offhand"`: Offhand weapon or item slot
 * - `"slot.armor.head"`: Helmet or head armor slot
 * - `"slot.armor.chest"`: Chestplate or torso armor slot
 * - `"slot.armor.legs"`: Leggings or pants armor slot
 * - `"slot.armor.feet"`: Boots or footwear armor slot
*/
export type EquipmentSlot =
  | "slot.weapon.offhand"
  | "slot.armor.head"
  | "slot.armor.chest"
  | "slot.armor.legs"
  | "slot.armor.feet";
