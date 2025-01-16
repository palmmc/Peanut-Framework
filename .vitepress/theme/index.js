import DefaultTheme from "vitepress/theme";
import Guide from "./Guide.vue";
import PeanutPlugins from "./PeanutPlugins.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("PeanutPlugins", PeanutPlugins);
    app.component("Guide", Guide);
  },
};
