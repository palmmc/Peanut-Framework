import typedocSidebar from "../docs/typedoc-sidebar.json";

export default {
  ignoreDeadLinks: true,
  title: "Peanut Framework",
  description: "A robust framework for creating bedrock addons in Typescript.",
  head: [["link", { rel: "icon", href: "/assets/icons/favicon.ico" }]],
  themeConfig: {
    logo: {
      light: "/assets/icons/logo-light.svg",
      dark: "/assets/icons/logo-dark.svg",
    },
    siteTitle: "Peanut Framework",
    nav: [
      { text: "Docs", link: "pages/docs" },
      { text: "Guides", link: "pages/guides" },
      { text: "Contact", link: "pages/contact" },
      { text: "Presets", link: "pages/presets" },
      {
        text: "Changelog",
        items: [{ text: "v0.0.1", link: "pages/changelog/0.0.1" }],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/palmmc/Peanut-Framework" },
      {
        icon: "discord",
        link: "https://discord.com/users/1052723959185031228",
        target: "_blank",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Peanut Framework",
    },
    sidebar: [
      {
        text: "Documentation",
        items: [
          {
            text: "Classes",
            link: "/docs/Classes/classes/index",
            items: [
              {
                text: "Project",
                link: "/docs/Classes/project/classes/Project",
              },
              {
                text: "Features",
                items: [
                  {
                    text: "Block",
                    link: "/docs/Classes/Features/Block/block/classes/Block",
                    items: [
                      {
                        text: "Permutation",
                        link: "/docs/Classes/Features/Block/permutation/classes/Permutation",
                      },
                    ],
                  },
                  {
                    text: "Item",
                    link: "/docs/Classes/Features/item/classes/Item",
                  },
                ],
              },
              {
                text: "Properties",
                items: [
                  {
                    text: "BlockMap",
                    link: "/docs/Classes/Properties/blockMap/classes/BlockMap",
                  },
                  {
                    text: "ItemMap",
                    link: "/docs/Classes/Properties/itemMap/classes/ItemMap",
                  },
                  {
                    text: "Language",
                    link: "/docs/Classes/Properties/language/classes/Language",
                  },
                  {
                    text: "Manifest",
                    link: "/docs/Classes/Properties/manifest/classes/Manifest",
                  },
                  {
                    text: "TerrainMap",
                    link: "/docs/Classes/Properties/terrainMap/classes/TerrainMap",
                  },
                ],
              },
              {
                text: "Expressions",
                items: [
                  {
                    text: "Molang",
                    link: "/docs/Classes/Expressions/molang/classes/Molang",
                  },
                ],
              },
            ],
          },
          {
            text: "Types",
            link: "/docs/Types/types/index",
          },
        ],
      },
    ],
  },
};
