import { Project, Manifest, Block } from "../Classes/classes";

const project = new Project("peanut_example");

project.manifest = new Manifest({
  //dependencies: { server: { beta: true }, "server-ui": {} },
  //modules: { scripts: {} },
  metadata: { authors: ["palm1"] },
});

project.language.autoTranslate({
  whitelistLanguages: ["es_ES", "es_MX", "en_GB"],
});
project.language.translate({
  key: "accessibility.chat.howtoopen",
  text: "Cookies!",
  overrideTranslations: [{ source: "en_GB", text: "Biscuits!" }],
});

project.features = [
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
    }),
];

project.compile();
