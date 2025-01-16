<h1 style="display:inline-block; margin-right:8px;">Loading Plugins</h1><span class="label guide" style="transform: translateY(-6px);">GUIDE</span> <span class="label easy" style="transform: translateY(-6px);">EASY</span>

---

Plugins can be a powerful tool when creating addons; if a plugin exists for the specific type of feature you are trying to create, you can use their class template and save all that work of making it from scratch!
<br><br>

---

# Installing a Plugin

1. First, find a plugin you like. You can find plugins in the [Plugins Marketplace](/pages/plugins), which serves as a big list of plugins that have been tagged on **Github**.
   ::: info
   <br>
   You may notice that some plugins are tagged with a little check mark. This is an indication that the plugin was created by a <b>Trusted Publisher</b>, and is guaranteed to be safe to use.

   We do **not** guarantee the safety of third-party plugins created for Peanut Framework, and highly recommend that you vet plugins for malicious code before using them.
   <br><br>
   <image src='/loading-plugins/trusted-publisher.png' alt='Trusted Publisher Badge' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>
   :::

2. Once you choose a plugin, click the plugin entry to visit its **Github** repository.
   ::: tip
   If you already know how to download releases from **Github**, you can skip this step.
   :::
3. Once there, locate and click on the **Releases** tab.
   <image src='/loading-plugins/find-releases.png' alt='Find Releases Tab' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

4. Now, download the latest version of the plugin.
   <image src='/loading-plugins/download-release.png' alt='Download the Latest Release' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>
   ::: info
   Peanut Framework's plugin loader accepts `.zip` and `.pfplugin` as plugin file formats.
   :::

5. Once your download has finished, open **Visual Studio Code** (_or choice of compiler_).

6. Navigate to the `/plugins/` folder in your project, and copy the plugin file into it.
   <image src='/loading-plugins/copy-plugin.png' alt='Copy plugin file' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

7. Now navigate to the tabs in the top left, and click **Terminal** » **New Terminal**.
   <image src='/getting-started/new-terminal.png' alt='Create new terminal' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

8. In the new window at the bottom of your screen, run the command:<br>`peanut reload <path to project directory>` or `npm run peanut:reload`
   <image src='/loading-plugins/run-reload.png' alt='Run peanut reload <path to project directory>' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

9. You should see a result similar to what is shown above. If so, this means the plugin has been successfully loaded into your project!

<div class="callout">
  <div class="title">Congratulations! 🥳</div>
  <div class="content">You've installed your first plugin.</div>
</div>

<br>

---

<br>

# Using the Plugin

::: tip
If you are already an experienced programmer, you are welcome to skip to the end of this step.
:::

Now that your plugin is installed, let's cover how you can use it!

In general, plugins are designed to create new **classes** or **types** that can be used along side Peanut Framework's ones in your project.
As such, similarly to framework defintions, they need to be **imported** into the script you are using them in.

This is very simple to accomplish; all you need is a line of code like this.

```ts{1}
import { Example } from "./plugins/ExamplePlugin/classes";
```

Make sure to replace '`ExamplePlugin`' with the _folder_ name of the plugin you installed, and change `'{ Example }'` to a list of every class and type you want to use.

Fantastic! With that out of the way, you can start using it like you would use any other typescript class!

::: details Collapse code snippet {open}

```ts
import { Block, Project } from "peanut-framework";
import { Pickaxe } from "./plugins/CustomPickaxe/classes";

const project = new Project("peanut_example");

project.manifest.properties({
  header: {
    name: "Peanut Example",
    description: "Sample Project with Peanut Framework",
  },
  dependencies: {
    server: {},
  },
  modules: {
    scripts: {
      entry: "main.js",
    },
  },
});

project.features = [
  new Pickaxe(
    "peanut:cosmium_pickaxe",
    "items/cosmium_pickaxe",
    "Cosmium Pickaxe",
    {
      destroySpeeds: 10,
      durability: 100,
      repairItems: [
        {
          items: ["minecraft:diamond"],
          repair_amount: 25,
        },
      ],
    }
  ),
];

project.compile();
```

:::

<div class="callout">
  <div class="title">Congratulations! 🎉</div>
  <div class="content">Now you're thinking with plugins!</div>
</div>

<br>

---

<br>

# Nice Job!

You have completed the [**Loading Plugins**](loading-plugins.md) guide!

If you experience any issues or have a suggestion, please create an [Issue](https://github.com/palmmc/Peanut-Framework/issues).

<div class="callout info">
  <div class="title">What's Next?</div>
  <div class="content">If you're in need of a little more guidance, try one of our other <a target=_blank href=/pages/guides.html>guides</a>!<br><br>
  If you're up to it, see <a target=_blank href=/pages/guides/creating-a-plugin>Creating a Plugin</a> to try making your <b>own</b> plugin!</div>
</div>

<Guide />
