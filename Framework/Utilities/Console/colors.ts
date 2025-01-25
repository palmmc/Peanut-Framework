/**
 * Replaces Minecraft color codes (prefixed with "§") in the given text with their corresponding ANSI escape codes.
 * This function is used to convert Minecraft-style text formatting into terminal-compatible formatting.
 * 
 * @param {string} text - The input text containing Minecraft color codes.
 * @returns {string} A string where Minecraft color codes have been replaced with ANSI escape sequences.
 * 
 * @example
 * const text = "§1This is dark blue§r and this is normal.";
 * const result = replaceMinecraftColorCodes(text);
 * console.log(result); // Output will be in dark blue, then reset to normal
 */
export function replaceMinecraftColorCodes(text: string): string {
  const colorMap: { [key: string]: string } = {
    "§0": "30", // Black
    "§1": "34", // Dark Blue
    "§2": "32", // Dark Green
    "§3": "36", // Dark Aqua
    "§4": "31", // Dark Red
    "§5": "35", // Dark Purple
    "§6": "33", // Gold
    "§7": "37", // Gray
    "§8": "90", // Dark Gray
    "§9": "94", // Blue
    "§a": "92", // Green
    "§b": "96", // Aqua
    "§c": "91", // Red
    "§d": "95", // Light Purple
    "§e": "93", // Yellow
    "§f": "97", // White
    "§l": "1", // Bold
    "§m": "9", // Strikethrough
    "§n": "4", // Underline
    "§o": "3", // Italic
    "§r": "0", // Reset
  };

  let result = text;
  for (const key in colorMap) {
    if (colorMap.hasOwnProperty(key)) {
      // Use a regular expression to replace all occurrences
      result = result.replace(new RegExp(key, "g"), `\x1b[${colorMap[key]}m`);
    }
  }
  return result;
}
