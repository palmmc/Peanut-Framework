import {
  Project,
  Manifest,
  Block,
  Permutation,
  Molang,
  Item,
} from "../Classes/classes";

const project = new Project("peanut_example");

project.manifest.properties({
  //dependencies: { server: { beta: true }, "server-ui": {} },
  //modules: { scripts: {} },
  metadata: { authors: ["palm1"] },
});

project.language.configure({ whitelistLanguages: ["es_ES", "es_MX"] });
project.language.autoTranslate();

project.language.translate({
  entries: [
    {
      key: "accessibility.chat.howtoopen",
      text: "Cookies!",
      overrideTranslation: [{ source: "en_GB", text: "Biscuits!" }],
    },
  ],
});

project.features = [
  new Item("palm:peanut", "Peanut")
    .icon("peanut_item", "peanut_item")
    .menuCategory({ category: "nature", group: "itemGroup.name.crop" })
    .rarity("epic")
    .projectile("snowball")
    .throwable(),
  /*.useModifiers(0.6, 1.61)
    .useAnimation("eat")
    .food({ nutrition: 2, saturationModifier: 0.3 }),*/
  new Block("palm:peanut_block", "Peanut Block")
    .menuCategory({
      category: "construction",
      group: "itemGroup.name.concrete",
    })
    .variatedTexture("peanut", [
      {
        path: "peanut",
        weight: 90,
      },
      {
        path: "peanut_rare",
        weight: 10,
      },
    ]),
  /*.rotatableTexture("cardinal", {
      south: { name: "peanut", path: "peanut" },
      "*": { name: "blank", path: "blank" },
    }),*/
  //.singleTexture("peanut", "peanut"),
  /*.multiTexture({
      south: { name: "peanut", path: "peanut" },
      north: { name: "blank", path: "blank" },
      east: { name: "blank", path: "blank" },
      west: { name: "blank", path: "blank" },
      up: { name: "blank", path: "blank" },
      down: { name: "blank", path: "blank" },
    }),*/
];

project.compile();
