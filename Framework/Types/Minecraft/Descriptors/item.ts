/**
 * Represents a descriptor for an item, which can either be a simple string or an object 
 * containing tags associated with the item.
 * 
 * The `tags` property allows associating the item with specific tags.
 */
export type ItemDescriptor = string | { tags: string };
