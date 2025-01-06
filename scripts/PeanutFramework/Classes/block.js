import * as fs from "fs";
import { toJSON, } from "../common";
import { FORMAT_VERSION } from "../version";
/**
 * Block class used for creating custom blocks.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class Block {
    constructor(identifier, displayName) {
        this.data = { format_version: FORMAT_VERSION.BLOCK };
        this.components = {};
        this.identifier = identifier;
        this.data["minecraft:block"] = {
            description: { identifier: this.identifier },
            components: { "minecraft:display_name": this.displayName },
        };
    }
    /**
     * Defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.
     * @param origin Minimal position of the bounds of the collision box. "origin" is specified as {x: number, y: number, z: number} and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
     * @param size Size of each side of the collision box. Size is specified as {x: number, y: number, z: number}. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
     */
    collisionBox(origin, size) {
        this.components["minecraft:collision_box"] = {
            origin: [origin.x, origin.y, origin.z],
            size: [size.x, size.y, size.z],
        };
        return this;
    }
    /**
     * 	Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. This component supports only "recipe_shaped" and "recipe_shapeless" typed recipes and not others like "recipe_furnace" or "recipe_brewing_mix". If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.
     * @param craftingTags Defines the tags recipes should define to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters.
     * @param tableName Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the "display_name" component. If this block has no "display_name" component, the name displayed will default to the name of the block.
     */
    craftingTable(craftingTags, tableName) {
        this.components["minecraft:crafting_table"] = {
            crafting_tags: craftingTags,
            table_name: tableName,
        };
        return this;
    }
    /**
     * Sets an ordered list of custom component names which are bound in script to be executed upon a block event.
     * @param components String array of custom component IDs.
     */
    customComponents(components) {
        this.components["minecraft:custom_components"] = components;
        return this;
    }
    /**
     * Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.
     * @param explosionResistance Sets the explosion resistance for the block. Greater values result in greater resistance to explosions. The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance.
     */
    destructibleByExplosion(explosionResistance) {
        this.components["minecraft:destructible_by_explosion"] = {
            explosion_resistance: explosionResistance,
        };
        return this;
    }
    /**
     * Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.
     * @param secondsToDestroy Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.
     * @param itemSpecificSpeeds
     *
     * Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.
     */
    destructibleByMining(secondsToDestroy, itemSpecificSpeeds) {
        this.components["minecraft:destructible_by_mining"] = {
            seconds_to_destroy: secondsToDestroy,
            itemSpecificSpeeds: itemSpecificSpeeds,
        };
        return this;
    }
    /**
     * Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.
     * @param catchChanceModifier A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. For a "catch_chance_modifier" greater than 0, the fire will continue to burn until the block is destroyed (or it will burn forever if the "destroy_chance_modifier" is 0). If the "catch_chance_modifier" is 0, and the block is directly ignited, the fire will eventually burn out without destroying the block (or it will have a chance to be destroyed if "destroy_chance_modifier" is greater than 0). The default value of 5 is the same as that of Planks.
     * @param destroyChanceModifier A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. For a "destroy_chance_modifier" of 0, the block will never be destroyed by fire, and the fire will burn forever if the "catch_chance_modifier" is greater than 0. The default value of 20 is the same as that of Planks.
     */
    flammable(catchChanceModifier, destroyChanceModifier) {
        this.components["minecraft:flammable"] = {
            catch_chance_modifier: catchChanceModifier,
            destroy_chance_modifier: destroyChanceModifier,
        };
        return this;
    }
    /**
     * Describes the friction for this block in a range of (0.0-0.9). Friction affects an entity's movement speed when it travels on the block. Greater value results in more friction.
     * @param friction Value of friction from 0.0-0.9, with higher values resulting in more friction.
     */
    friction(friction) {
        this.components["minecraft:friction"] = friction;
        return this;
    }
    /**
     * The description identifier of the geometry to use to render this block. This identifier must either match an existing geometry identifier in any of the loaded resource packs or be one of the currently supported Vanilla identifiers: "minecraft:geometry.full_block" or "minecraft:geometry.cross".
     * @param geometry Geometry object or identifier to use to render this block.
     */
    geometry(geometry) {
        this.components["minecraft:geometry"] = geometry;
        return this;
    }
    /**
     * 	The description identifier of the geometry and material used to render the item of this block.
     *  ### **Requires `Upcoming Features` toggle**
     * @param geometry - The Geometry component that will be used for the item.
     * @param materialInstances - The Material Instances component that will be used for the item.
     */
    itemVisual(geometry, materialInstances) {
        this.components["minecraft:item_visual"] = {
            geometry: geometry,
            material_instances: materialInstances,
        };
        return this;
    }
    /**
     * The amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more.
     * @param lightDampening Amount of light to be dampened.
     */
    lightDampening(lightDampening) {
        this.components["minecraft:light_dampening"] = lightDampening;
        return this;
    }
    /**
     * The amount of light this block will emit in a range (0-15). Higher value means more light will be emitted.
     * @param lightEmission Amount of light to be emitted.
     */
    lightEmission(lightEmission) {
        this.components["minecraft:light_emission"] = lightEmission;
        return this;
    }
    /**
     * Liquid detection is a component that defines how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type. If multiple are specified, the first will be used and the rest will be ignored.
     * ### **Requires `Upcoming Features` toggle**
     * @param detectionRules Detection rule array for when this block comes in contact with a certain liquid.
     * @param can_contain_liquid 	Whether this block can contain the liquid. For example, if the liquid type is water, this means the block can be waterlogged.
     * @param liquid_type The type of liquid this detection rule is for. Currently, water is the only supported liquid type. If this field is omitted, water will be the liquid type by default.
     * @param on_liquid_touches How the block reacts to flowing water.
     * @param stops_liquid_flowing_from_direction When a block contains a liquid, controls the directions in which the liquid can't flow out from the block. Also controls the directions in which a block can stop liquid flowing into it if no_reaction is set for the on_liquid_touches field. Can be a list of the following directions: "up", "down", "north", "south", "east", "west". The default is an empty list; this means that liquid can flow out of all directions by default.
     */
    liquidDetection(detectionRules) {
        this.components["minecraft:liquid_detection"] = {};
        this.components["minecraft:liquid_detection"]["detection_rules"] =
            detectionRules;
        return this;
    }
    /**
     * Defines a loot table for a block to drop when broken.
     * @param loot The path to the loot table, relative to the behavior pack. Path string is limited to 256 characters.
     */
    loot(loot) {
        this.components["minecraft:loot"] = loot;
        return this;
    }
    /**
     * Sets the color of the block when rendered to a map. The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map.
     * @param color Color of the block when rendered to a map.
     */
    mapColor(color) {
        this.components["minecraft:map_color"] = color;
        return this;
    }
    /**
     * The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".
     * @param materialInstances The Material Instances component contains a map of material instance names/face names to material instance definitions (JSON Objects). The material instance * is required and will be used for any materials that don't have a match.
     * @param texture - Texture name for the material.
     * @param ambient_occlusion - If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting.
     * @param face_dimming - This material should be dimmed by the direction it's facing.
     * @param render_method - The render method to use. Must be one of the options listed in the table below. See this page to understand the relationship between render method and render distance.
     */
    materialInstances(materialInstances) {
        this.components["minecraft:material_instances"] = materialInstances;
        return this;
    }
    /**
     * Sets rules for under what conditions the block can be placed/survive
     * @param conditions List of conditions where the block can be placed/survive. Limited to 64 conditions.
     * @param allowed_faces List of any of the following strings describing which face(s) this block can be placed on: "up", "down", "north", "south", "east", "west", "side", "all". Limited to 6 faces.
     * @param block_filter List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below.
     */
    placementFilter(conditions) {
        this.components["minecraft:placement_filter"] = {
            conditions,
        };
        return this;
    }
    /**
     * The basic redstone properties of a block; if the component is not provided the default values are used.
     * @param redstoneConductor Specifies if the block can be powered by redstone.
     * @param allowsWireToStepDown Specifies if redstone wire can stair-step downward on the block.
     * @returns
     */
    redstoneConductivity(redstoneConductor, allowsWireToStepDown) {
        this.components["minecraft:redstone_conductivity"] = {
            redstone_conductor: redstoneConductor,
            allows_wire_to_step_down: allowsWireToStepDown,
        };
        return this;
    }
    /**
     * Selection Box is a JSON Object component that defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.
     * @param origin Minimal position of the bounds of the selection box. "origin" is specified as {x: number, y: number, z: number} and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
     * @param size Size of each side of the selection box. Size is specified as {x: number, y: number, z: number}. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
     */
    selectionBox(origin, size) {
        this.components["minecraft:selection_box"] = {
            origin: [origin.x, origin.y, origin.z],
            size: [size.x, size.y, size.z],
        };
        return this;
    }
    /**
     * Causes the block to tick after a random delay in the range specified by interval_range.
     * @param intervalRange Two durations (in ticks) which will be used as the minimum and maximum delays for randomness.
     * @param looping Whether this block should continuously tick, rather than only ticking once.
     */
    tick(intervalRange, looping) {
        this.components["minecraft:tick"] = {
            interval_range: [intervalRange.min, intervalRange.max],
            looping: looping,
        };
        return this;
    }
    /**
     * Tags are empty JSON Objects that define a tag to be added to a block. The component has no body or parameters, it is simply a flag, and when the block is parsed it will be added to the block's tag list.
     * @param tags A list of tags to be added to the block.
     */
    tag(tags) {
        for (let t of tags) {
            this.components["tag:" + t] = {};
        }
        return this;
    }
    /**
     * Transformation supports rotation, scaling, and translation. Rotation and scaling around a pivot is also supported. The component can be added to a whole block and/or to individual block permutations. Transformed geometries retain the same restrictions that non-transformed geometries have, such as a maximum size of 30/16 units.
     * @param translation Amount the block should be translated along each axis. "Translation" is specified as {x: number, y: number, z: number} using floating point values.
     * @param rotation Amount in degrees the block should be rotated on each axis. "rotation" is specified as {x: number, y: number, z: number} using floating point values and must be axis aligned, otherwise the value will be rounded to the nearest axis-aligned value.
     * @param scale Amount the block should be scaled along each axis. "Scale" is specified as {x: number, y: number, z: number} using floating point values.
     * @param rotationPivot Offset to the pivot point around which to apply the rotation. "rotation_pivot" is specified as {x: number, y: number, z: number} using floating point values.
     * @param scalePivot Offset to the pivot point around which to apply the scale. "scale_pivot" is specified as {x: number, y: number, z: number} using floating point values.
     */
    transformation(options) {
        this.components["minecraft:transformation"] = {
            translation: toJSON.Vector(options.translation),
            rotation: toJSON.Vector(options.rotation),
            scale: toJSON.Vector(options.scale),
            rotation_pivot: toJSON.Vector(options.rotationPivot),
            scale_pivot: toJSON.Vector(options.scalePivot),
        };
        return this;
    }
    /**
     * Compiles a finished block class to JSON. Use after all other methods on this instance to generate it.
     */
    compile() {
        this.data["minecraft:block"]["components"] = this.components;
        const directoryPath = "./behavior_packs/example_addon/blocks";
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }
        fs.writeFileSync(`./behavior_packs/example_addon/blocks/${this.identifier.substring(this.identifier.indexOf(":") + 1)}.json`, JSON.stringify(this.data, null, 2));
    }
}
