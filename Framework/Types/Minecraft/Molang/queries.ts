/**
 * Defines the available query functions in Molang expressions.
 * 
 * These functions are used to retrieve various properties or states of entities, blocks, and other in-game objects.
 * Each query function corresponds to a specific property or condition that can be evaluated within Molang expressions.
 * 
 *   - "above_top_solid"                    // Checks if the entity is above a solid block.
 *   - "actor_count"                        // Returns the number of actors.
 *   - "actor_property"                     // Retrieves a specific property of an actor.
 *   - "age"                                // Returns the age of an entity.
 *   - "air"                                // Checks the air level of an entity.
 *   - "all_animations_finished"            // Checks if all animations of an entity are finished.
 *   - "all_animations_looping"             // Checks if all animations of an entity are looping.
 *   - "any_animation_finished"             // Checks if any animation of an entity is finished.
 *   - "any_animation_looping"              // Checks if any animation of an entity is looping.
 *   - "any_tag"                            // Checks if the entity has any specific tag.
 *   - "armor_color_slot"                   // Retrieves the color of armor in a specific slot.
 *   - "armor_material_slot"                // Retrieves the material of armor in a specific slot.
 *   - "armor_texture_slot"                 // Retrieves the texture of armor in a specific slot.
 *   - "attack_time"                        // Returns the time since the entity was last attacked.
 *   - "block_adjacent_to_liquid"           // Checks if the block is adjacent to a liquid block.
 *   - "block_face"                         // Returns the face of the block.
 *   - "block_property"                     // Retrieves a specific property of a block.
 *   - "block_state"                        // Retrieves the state of a block.
 *   - "body_x_rotation"                    // Returns the X rotation of the entity's body.
 *   - "body_y_rotation"                    // Returns the Y rotation of the entity's body.
 *   - "bone_aabb"                          // Retrieves the axis-aligned bounding box of a bone.
 *   - "bone_origin"                        // Retrieves the origin of a bone.
 *   - "bone_rotation"                      // Retrieves the rotation of a bone.
 *   - "camera_distance"                    // Checks the distance from the camera.
 *   - "camera_position"                    // Retrieves the position of the camera.
 *   - "can_climb"                          // Checks if the entity can climb.
 *   - "can_fly"                            // Checks if the entity can fly.
 *   - "can_power_jump"                     // Checks if the entity can perform a power jump.
 *   - "can_swim"                           // Checks if the entity can swim.
 *   - "can_walk"                           // Checks if the entity can walk.
 *   - "cape_flap_amount"                   // Retrieves the amount of cape flap.
 *   - "cape_flap_speed"                    // Retrieves the speed of cape flap.
 *   - "color"                              // Retrieves the color of an entity or object.
 *   - "current_squish_value"               // Retrieves the current squish value of an entity.
 *   - "damage_taken"                       // Retrieves the damage taken by an entity.
 *   - "day"                                // Checks the current day in the world.
 *   - "death_time"                         // Retrieves the time when an entity died.
 *   - "destructible_by_mining"             // Checks if a block is destructible by mining.
 *   - "distance_from_camera"               // Retrieves the distance from the camera to the entity.
 *   - "distance_travelled"                 // Retrieves the distance travelled by an entity.
 *   - "effect_emitter_count"               // Returns the number of effect emitters attached to an entity.
 *   - "effect_particle_count"              // Returns the number of effect particles attached to an entity.
 *   - "equipment_count"                    // Returns the number of equipment slots used by an entity.
 *   - "eye_target_position"                // Retrieves the position of the entity's eye target.
 *   - "fall_distance"                      // Returns the distance an entity has fallen.
 *   - "first_person_camera_mode"           // Checks if the first-person camera mode is active.
 *   - "fishing_hook_distance"              // Retrieves the distance of the fishing hook.
 *   - "fishing_hook_position"              // Retrieves the position of the fishing hook.
 *   - "flag"                               // Retrieves a specific flag of an entity.
 *   - "fleece_color"                       // Retrieves the fleece color of an entity.
 *   - "ground_speed"                       // Retrieves the speed of the entity on the ground.
 *   - "has_armor_slot"                     // Checks if the entity has an armor slot.
 *   - "has_cape"                           // Checks if the entity has a cape.
 *   - "has_collision"                      // Checks if the entity has collision.
 *   - "has_equipment_slot"                 // Checks if the entity has an equipment slot.
 *   - "has_rider"                          // Checks if the entity has a rider.
 *   - "has_target"                         // Checks if the entity has a target.
 *   - "health"                             // Retrieves the current health of an entity.
 *   - "hurt_direction"                     // Retrieves the direction the entity was hurt from.
 *   - "hurt_time"                          // Retrieves the time since the entity was last hurt.
 *   - "in_caravan"                         // Checks if the entity is in a caravan.
 *   - "in_love_ticks"                      // Retrieves the number of ticks the entity has been in love.
 *   - "is_angry"                           // Checks if the entity is angry.
 *   - "is_attached_to_entity"              // Checks if the entity is attached to another entity.
 *   - "is_baby"                            // Checks if the entity is a baby.
 *   - "is_breathing"                       // Checks if the entity is breathing.
 *   - "is_casting"                         // Checks if the entity is casting.
 *   - "is_celebrating"                     // Checks if the entity is celebrating.
 *   - "is_charged"                         // Checks if the entity is charged.
 *   - "is_chested"                         // Checks if the entity is chested.
 *   - "is_critical"                        // Checks if the entity is in a critical state.
 *   - "is_dancing"                         // Checks if the entity is dancing.
 *   - "is_eating"                          // Checks if the entity is eating.
 *   - "is_elder"                           // Checks if the entity is an elder.
 *   - "is_falling"                         // Checks if the entity is falling.
 *   - "is_glowing"                         // Checks if the entity is glowing.
 *   - "is_grazing"                         // Checks if the entity is grazing.
 *   - "is_idling"                          // Checks if the entity is idling.
 *   - "is_illager_captain"                 // Checks if the entity is an illager captain.
 *   - "is_in_love"                         // Checks if the entity is in love.
 *   - "is_in_ui"                           // Checks if the entity is in a UI.
 *   - "is_in_water"                        // Checks if the entity is in water.
 *   - "is_interested"                      // Checks if the entity is interested.
 *   - "is_invisible"                       // Checks if the entity is invisible.
 *   - "is_laying_down"                     // Checks if the entity is laying down.
 *   - "is_laying_egg"                      // Checks if the entity is laying an egg.
 *   - "is_leashed"                         // Checks if the entity is leashed.
 *   - "is_lingering"                       // Checks if the entity is lingering.
 *   - "is_moving"                          // Checks if the entity is moving.
 *   - "is_on_fire"                         // Checks if the entity is on fire.
 *   - "is_on_ground"                       // Checks if the entity is on the ground.
 *   - "is_onfire"                          // Checks if the entity is on fire.
 *   - "is_orphaned"                        // Checks if the entity is orphaned.
 *   - "is_powered"                         // Checks if the entity is powered.
 *   - "is_pregnant"                        // Checks if the entity is pregnant.
 *   - "is_riding"                          // Checks if the entity is riding.
 *   - "is_roaring"                         // Checks if the entity is roaring.
 *   - "is_saddled"                         // Checks if the entity is saddled.
 *   - "is_shaking"                         // Checks if the entity is shaking.
 *   - "is_sheared"                         // Checks if the entity is sheared.
 *   - "is_sleeping"                        // Checks if the entity is sleeping.
 *   - "is_sneaking"                        // Checks if the entity is sneaking.
 *   - "is_sprinting"                       // Checks if the entity is sprinting.
 *   - "is_stackable"                       // Checks if the entity is stackable.
 *   - "is_stalking"                        // Checks if the entity is stalking.
 *   - "is_standing"                        // Checks if the entity is standing.
 *   - "is_swimming"                        // Checks if the entity is swimming.
 *   - "is_tamed"                           // Checks if the entity is tamed.
 *   - "is_transforming"                    // Checks if the entity is transforming.
 *   - "item_count"                         // Retrieves the number of items the entity holds.
 *   - "item_property"                      // Retrieves a property of an item.
 *   - "last_hit_by_player"                 // Retrieves the last player that hit the entity.
 *   - "leash_holder_position"              // Retrieves the position of the entity holding the leash.
 *   - "life_span"                          // Retrieves the life span of an entity.
 *   - "life_time"                          // Retrieves the life time of an entity.
 *   - "limb_speed"                         // Retrieves the speed of the entity's limbs.
 *   - "liquid_depth"                       // Checks the depth of liquid under the entity.
 *   - "main_hand_item_count"               // Retrieves the number of items in the entity's main hand.
 *   - "mark_variant"                       // Retrieves the mark variant of the entity.
 *   - "max_health"                         // Retrieves the maximum health of the entity.
 *   - "moon_brightness"                    // Retrieves the brightness of the moon.
 *   - "moon_phase"                         // Retrieves the current moon phase.
 *   - "movement_direction"                 // Retrieves the movement direction of the entity.
 *   - "off_hand_item_count"                // Retrieves the number of items in the entity's off-hand.
 *   - "on_fire"                            // Checks if the entity is on fire.
 *   - "owner_identifier"                   // Retrieves the identifier of the entity's owner.
 *   - "player_level"                       // Retrieves the level of the player.
 *   - "position"                           // Retrieves the position of the entity.
 *   - "previous_squish_value"              // Retrieves the previous squish value of the entity.
 *   - "roll"                               // Retrieves the roll of the entity.
 *   - "runtime_identifier"                 // Retrieves the runtime identifier of the entity.
 *   - "saddle_material"                    // Retrieves the material of the saddle.
 *   - "skin_id"                            // Retrieves the skin ID of the entity.
 *   - "spellcolor"                         // Retrieves the color of the entity's spell.
 *   - "strength"                           // Retrieves the strength of the entity.
 *   - "structural_integrity"               // Retrieves the structural integrity of a block or entity.
 *   - "swim_amount"                        // Retrieves the swim amount of the entity.
 *   - "target_distance"                    // Retrieves the distance to the entity's target.
 *   - "target_position"                    // Retrieves the position of the entity's target.
 *   - "temp"                               // Retrieves a temporary value associated with the entity.
 *   - "time_of_day"                        // Retrieves the current time of day in the world.
 *   - "time_since_death"                   // Retrieves the time since the entity's death.
 *   - "time_since_hurt"                    // Retrieves the time since the entity was last hurt.
 *   - "total_emitter_count"                // Retrieves the total number of emitters attached to the entity.
 *   - "total_particle_count"               // Retrieves the total number of particles attached to the entity.
 *   - "trade_tier"                         // Retrieves the trade tier of an entity.
 *   - "unhappy_counter"                    // Retrieves the number of unhappy ticks.
 *   - "variant"                            // Retrieves the variant of the entity.
 *   - "vertical_speed"                     // Retrieves the vertical speed of the entity.
 *   - "walk_distance"                      // Retrieves the distance the entity has walked.
 *   - "wing_flap_position"                 // Retrieves the wing flap position of the entity.
 *   - "wing_flap_speed"                    // Retrieves the wing flap speed of the entity.
 *   - "yaw_speed"                          // Retrieves the yaw speed of the entity.
 */
export type MolangQueryFunction =
  | "above_top_solid"
  | "actor_count"
  | "actor_property"
  | "age"
  | "air"
  | "all_animations_finished"
  | "all_animations_looping"
  | "any_animation_finished"
  | "any_animation_looping"
  | "any_tag"
  | "armor_color_slot"
  | "armor_material_slot"
  | "armor_texture_slot"
  | "attack_time"
  | "block_adjacent_to_liquid"
  | "block_face"
  | "block_property"
  | "block_state"
  | "body_x_rotation"
  | "body_y_rotation"
  | "bone_aabb"
  | "bone_origin"
  | "bone_rotation"
  | "camera_distance"
  | "camera_position"
  | "can_climb"
  | "can_fly"
  | "can_power_jump"
  | "can_swim"
  | "can_walk"
  | "cape_flap_amount"
  | "cape_flap_speed"
  | "color"
  | "current_squish_value"
  | "damage_taken"
  | "day"
  | "death_time"
  | "destructible_by_mining"
  | "distance_from_camera"
  | "distance_travelled"
  | "effect_emitter_count"
  | "effect_particle_count"
  | "equipment_count"
  | "eye_target_position"
  | "fall_distance"
  | "first_person_camera_mode"
  | "fishing_hook_distance"
  | "fishing_hook_position"
  | "flag"
  | "fleece_color"
  | "ground_speed"
  | "has_armor_slot"
  | "has_cape"
  | "has_collision"
  | "has_equipment_slot"
  | "has_rider"
  | "has_target"
  | "health"
  | "hurt_direction"
  | "hurt_time"
  | "in_caravan"
  | "in_love_ticks"
  | "is_angry"
  | "is_attached_to_entity"
  | "is_baby"
  | "is_breathing"
  | "is_casting"
  | "is_celebrating"
  | "is_charged"
  | "is_chested"
  | "is_critical"
  | "is_dancing"
  | "is_eating"
  | "is_elder"
  | "is_falling"
  | "is_glowing"
  | "is_grazing"
  | "is_idling"
  | "is_illager_captain"
  | "is_in_love"
  | "is_in_ui"
  | "is_in_water"
  | "is_interested"
  | "is_invisible"
  | "is_laying_down"
  | "is_laying_egg"
  | "is_leashed"
  | "is_lingering"
  | "is_moving"
  | "is_on_fire"
  | "is_on_ground"
  | "is_onfire"
  | "is_orphaned"
  | "is_powered"
  | "is_pregnant"
  | "is_riding"
  | "is_roaring"
  | "is_saddled"
  | "is_shaking"
  | "is_sheared"
  | "is_sleeping"
  | "is_sneaking"
  | "is_sprinting"
  | "is_stackable"
  | "is_stalking"
  | "is_standing"
  | "is_swimming"
  | "is_tamed"
  | "is_transforming"
  | "item_count"
  | "item_property"
  | "last_hit_by_player"
  | "leash_holder_position"
  | "life_span"
  | "life_time"
  | "limb_speed"
  | "liquid_depth"
  | "main_hand_item_count"
  | "mark_variant"
  | "max_health"
  | "moon_brightness"
  | "moon_phase"
  | "movement_direction"
  | "off_hand_item_count"
  | "on_fire"
  | "owner_identifier"
  | "player_level"
  | "position"
  | "previous_squish_value"
  | "roll"
  | "runtime_identifier"
  | "saddle_material"
  | "skin_id"
  | "spellcolor"
  | "strength"
  | "structural_integrity"
  | "swim_amount"
  | "target_distance"
  | "target_position"
  | "temp"
  | "time_of_day"
  | "time_since_death"
  | "time_since_hurt"
  | "total_emitter_count"
  | "total_particle_count"
  | "trade_tier"
  | "unhappy_counter"
  | "variant"
  | "vertical_speed"
  | "walk_distance"
  | "wing_flap_position"
  | "wing_flap_speed"
  | "yaw_speed";
