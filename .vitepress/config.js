import typedocSidebar from "../docs/typedoc-sidebar.json";

export default {
  ignoreDeadLinks: true,
  title: "Peanut Framework",
  description: "A robust framework for creating bedrock addons in Typescript.",
  themeConfig: {
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        "link",
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        "link",
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        "link",
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        "meta",
        {
          name: "apple-mobile-web-app-title",
          content: "Peanut Framework",
        },
        "link",
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    ],
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    siteTitle: "Peanut Framework",
    nav: [
      { text: "Docs", link: "/docs/docs" },
      { text: "Guides", link: "/pages/guides/guides" },
      { text: "Plugins", link: "/pages/plugins" },
      { text: "Contact", link: "/pages/contact" },
      {
        text: "Changelog",
        items: [
          { text: "v0.0.1", link: "pages/changelog/0.0.1" },
          { text: "v0.0.2", link: "pages/changelog/0.0.2" },
        ],
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
      copyright: "Copyright © 2025 Palm (palmmc)",
    },
    sidebar: {
      "/docs/": {
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
                    link: "/docs/Classes/Features/Block/classes/Block",
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
      "/pages/guides/getting-started": {
        text: "Guides",
        items: [
          {
            text: "Guides",
            link: "/pages/guides/guides",
            items: [
              {
                text: "Getting Started",
                items: [
                  {
                    text: "Setup",
                    link: "#setup",
                  },
                  {
                    text: "Creating your Project",
                    link: "#creating-your-project",
                  },
                  {
                    text: "Compiling your Addon",
                    link: "#compiling-your-addon",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/pages/guides/": {
        text: "Guides",
        items: [
          {
            text: "Guides",
            link: "/pages/guides/guides",
            items: [
              {
                text: "Getting Started",
                link: "/pages/guides/getting-started",
              },
            ],
          },
        ],
      },
    },
  },
};
