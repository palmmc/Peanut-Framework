import { Block, Project } from "peanut-framework";

const project = new Project("peanut_example");

project.manifest.properties({
  header: {
    name: "Peanut Example",
    description: "Sample Project with Peanut Framework",
  },
  // Uncomment the section below to enable scripts.
  /*
  dependencies: {
    server: {},
    //"server-ui": {},
  },
  modules: {
    scripts: {
      entry: "main.js",
    },
  },
  */
});

project.features = [
  new Block("peanut:block", "Peanut Block").singleTexture(
    "peanut",
    "blocks/peanut"
  ),
];

project.compile();
