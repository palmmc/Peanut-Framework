/**
 * Defines the various rendering methods available for entities in the game.
 * 
 * These methods control how entities are rendered, including their transparency, blending, emissive effects, 
 * and other special rendering behaviors such as glint, color changes, and custom entity rendering techniques.
 * 
 *   - "alpha_test"                       // Renders the entity with alpha testing for transparency, where alpha < 1 is considered transparent.
 *   - "alpha_test_single_sided"          // Renders the entity with single-sided alpha testing.
 *   - "blend"                            // Renders the entity with blending for transparency effects.
 *   - "double_sided"                     // Renders the entity with both sides visible.
 *   - "opaque"                           // Renders the entity as fully opaque, with no transparency effects.
 *   - "alpha_block"                      // Renders the entity with block-level alpha testing.
 *   - "alpha_block_color"                // Renders the entity with block-level alpha testing and color effects.
 *   - "banner"                           // Renders the entity as a banner.
 *   - "banner_pole"                      // Renders the entity as a banner pole.
 *   - "beacon_beam"                      // Renders the entity as a beacon beam.
 *   - "beacon_beam_transparent"          // Renders the beacon beam with transparency effects.
 *   - "charged_creeper"                  // Renders a charged creeper with special effects.
 *   - "conduit_wind"                     // Renders a conduit with wind effects.
 *   - "entity"                           // Standard entity rendering method.
 *   - "entity_alphablend"                // Renders the entity with alpha blending for transparency.
 *   - "entity_alphablend_nocolorentity_static"  // Renders the entity with alpha blending and no color change.
 *   - "entity_alphatest"                 // Renders the entity with alpha testing.
 *   - "entity_alphatest_change_color"    // Renders the entity with alpha testing and a color change effect.
 *   - "entity_alphatest_change_color_glint" // Renders the entity with alpha testing and glint effects on color change.
 *   - "entity_alphatest_glint"           // Renders the entity with glint effects applied during alpha testing.
 *   - "entity_alphatest_glint_item"      // Renders the entity with glint effects on items.
 *   - "entity_alphatest_multicolor_tint" // Renders the entity with multi-color tint during alpha testing.
 *   - "entity_beam"                      // Renders the entity as a beam.
 *   - "entity_beam_additive"             // Renders the entity as an additive beam with transparency.
 *   - "entity_change_color"              // Renders the entity with a color change effect.
 *   - "entity_change_color_glint"        // Renders the entity with a color change and glint effect.
 *   - "entity_custom"                    // Renders the entity with a custom rendering method.
 *   - "entity_dissolve_layer0"           // Renders the entity with a dissolve effect, layer 0.
 *   - "entity_dissolve_layer1"           // Renders the entity with a dissolve effect, layer 1.
 *   - "entity_emissive"                  // Renders the entity with emissive lighting effects.
 *   - "entity_emissive_alpha"            // Renders the entity with emissive lighting and alpha transparency.
 *   - "entity_emissive_alpha_one_sided"  // Renders the entity with one-sided emissive lighting and alpha transparency.
 *   - "entity_flat_color_line"           // Renders the entity as a flat color line.
 *   - "entity_glint"                     // Renders the entity with a glint effect.
 *   - "entity_lead_base"                 // Renders the entity with a lead rope base.
 *   - "entity_loyalty_rope"              // Renders the entity with a loyalty rope effect.
 *   - "entity_multitexture"              // Renders the entity with multiple textures.
 *   - "entity_multitexture_alpha_test"   // Renders the entity with multiple textures and alpha testing.
 *   - "entity_multitexture_alpha_test_color_mask" // Renders the entity with multiple textures, alpha testing, and color mask.
 *   - "entity_multitexture_color_mask"   // Renders the entity with multiple textures and a color mask.
 *   - "entity_multitexture_masked"       // Renders the entity with multiple textures and a masked rendering effect.
 *   - "entity_multitexture_multiplicative_blend" // Renders the entity with a multiplicative blend using multiple textures.
 *   - "entity_nocull"                    // Renders the entity with no back-face culling.
 *   - "guardian_ghost"                   // Renders a guardian ghost entity with special effects.
 *   - "item_in_hand"                     // Renders the entity as an item held in the player's hand.
 *   - "item_in_hand_entity_alphatest"    // Renders the item in the hand with alpha testing.
 *   - "item_in_hand_entity_alphatest_color" // Renders the item in the hand with alpha testing and color effects.
 *   - "item_in_hand_glint"               // Renders the item in the hand with a glint effect.
 *   - "item_in_hand_multicolor_tint"     // Renders the item in the hand with multi-color tint effects.
 *   - "map"                              // Renders the map entity.
 *   - "map_decoration"                   // Renders the map entity as a decoration.
 *   - "map_marker"                       // Renders the map entity as a marker.
 *   - "moving_block"                     // Renders the entity as a moving block.
 *   - "moving_block_alpha"               // Renders the moving block entity with alpha transparency.
 *   - "moving_block_alpha_seasons"       // Renders the moving block with alpha transparency and seasonal effects.
 *   - "moving_block_alpha_single_side"   // Renders the moving block with alpha transparency on a single side.
 *   - "moving_block_blend"               // Renders the moving block with blending effects.
 *   - "moving_block_double_side"         // Renders the moving block with visibility on both sides.
 *   - "moving_block_seasons"             // Renders the moving block with seasonal effects.
 *   - "opaque_block"                     // Renders the entity as an opaque block.
 *   - "opaque_block_color"               // Renders the entity as an opaque block with color effects.
 *   - "opaque_block_color_uv2"           // Renders the entity as an opaque block with color and UV mapping.
 */
export type EntityRenderMethods =
  | "alpha_test"
  | "alpha_test_single_sided"
  | "blend"
  | "double_sided"
  | "opaque"
  | "alpha_block"
  | "alpha_block_color"
  | "banner"
  | "banner_pole"
  | "beacon_beam"
  | "beacon_beam_transparent"
  | "charged_creeper"
  | "conduit_wind"
  | "entity"
  | "entity_alphablend"
  | "entity_alphablend_nocolorentity_static"
  | "entity_alphatest"
  | "entity_alphatest_change_color"
  | "entity_alphatest_change_color_glint"
  | "entity_alphatest_glint"
  | "entity_alphatest_glint_item"
  | "entity_alphatest_multicolor_tint"
  | "entity_beam"
  | "entity_beam_additive"
  | "entity_change_color"
  | "entity_change_color_glint"
  | "entity_custom"
  | "entity_dissolve_layer0"
  | "entity_dissolve_layer1"
  | "entity_emissive"
  | "entity_emissive_alpha"
  | "entity_emissive_alpha_one_sided"
  | "entity_flat_color_line"
  | "entity_glint"
  | "entity_lead_base"
  | "entity_loyalty_rope"
  | "entity_multitexture"
  | "entity_multitexture_alpha_test"
  | "entity_multitexture_alpha_test_color_mask"
  | "entity_multitexture_color_mask"
  | "entity_multitexture_masked"
  | "entity_multitexture_multiplicative_blend"
  | "entity_nocull"
  | "guardian_ghost"
  | "item_in_hand"
  | "item_in_hand_entity_alphatest"
  | "item_in_hand_entity_alphatest_color"
  | "item_in_hand_glint"
  | "item_in_hand_multicolor_tint"
  | "map"
  | "map_decoration"
  | "map_marker"
  | "moving_block"
  | "moving_block_alpha"
  | "moving_block_alpha_seasons"
  | "moving_block_alpha_single_side"
  | "moving_block_blend"
  | "moving_block_double_side"
  | "moving_block_seasons"
  | "opaque_block"
  | "opaque_block_color"
  | "opaque_block_color_uv2";
