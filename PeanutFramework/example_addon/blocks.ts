import { Block } from "../Classes/block";

new Block("palm:peanut")
  .collisionBox({ x: -6, y: 0, z: -6 }, { x: 6, y: 12, z: 6 })
  .customComponents(["peanut:gravity"])
  .destructibleByExplosion(1)
  .itemVisual("geo.peanut", {
    "*": {
      texture: "peanut",
      ambient_occlusion: false,
      render_method: "opaque",
    },
  })
  .liquidDetection([
    {
      can_contain_liquid: true,
      liquid_type: "water",
      on_liquid_touches: "no_reaction",
    },
  ])
  .placementFilter([
    {
      allowed_faces: ["north", "south"],
      block_filter: [
        { name: "palm:peanut2", states: { growth: 1, is_peanut: true } },
      ],
    },
  ])
  .tag(["acacia", "diamond_pick_diggable", "peanut:extra_creamy"])
  .transformation({
    scale: { x: 2, y: 2, z: 2 },
    rotation: { x: 90, y: 0, z: 0 },
  })
  .compile();
