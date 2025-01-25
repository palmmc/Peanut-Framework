/**
 * Defines the different rendering methods for blocks in the game.
 * 
 * These methods determine how a block is rendered in the world, affecting how its
 * transparency, blending, and visibility are handled during rendering.
 * 
 * 
 *   - "alpha_test"               // Renders the block with alpha testing for transparency, where blocks with alpha < 1 are considered transparent.
 *   - "alpha_test_single_sided"  // Renders the block with single-sided alpha testing for transparency, where the transparency is applied only on one side.
 *   - "blend"                    // Uses blending to render the block, typically for semi-transparent blocks.
 *   - "double_sided"             // Renders the block as double-sided, meaning both sides are visible, useful for non-solid or decorative blocks.
 *   - "opaque"                   // Renders the block as opaque, meaning it is fully solid and does not support transparency or blending.
 */
export type BlockRenderMethods =
  | "alpha_test"
  | "alpha_test_single_sided"
  | "blend"
  | "double_sided"
  | "opaque";
