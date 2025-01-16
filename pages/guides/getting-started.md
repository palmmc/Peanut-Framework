<h1 style="display:inline-block; margin-right:8px;">Getting Started</h1><span class="label guide" style="transform: translateY(-6px);">GUIDE</span> <span class="label easy" style="transform: translateY(-6px);">EASY</span>

---

So, you want to create an addon with Peanut? Well, let's dive right in!
<br><br>
Here's what you need to get started:<br>
<br>
<b><span style='font-size:24px;'>Prerequisites</span></b>

- **`NodeJS`** - https://nodejs.org/en/download
- **`Visual Studio Code`** (_or choice of compiler_) - https://code.visualstudio.com/download
- A copy of Minecraft: Bedrock Edition.

<br>

---

<br>

# Setup

1. Start by downloading the sample project. Grab the latest [Release](https://github.com/palmmc/Peanut-Framework/releases/latest) from GitHub.
2. Once installation has finished, extract the folder into a directory of your choice. This will become your project directory, and you can name it anything you want.
3. After extracting the folder, your folder structure should look something like this:
   ::: info

   ```
   ---
   ├── PROJECT_DIRECTORY/
   │   ├── NAMESPACE/
   │   │   ├── plugins/ -# Used for PeanutFramework plugins.
   │   │   │   └── ...
   │   │   ├── resources/ -# Used for resource pack resources (textures, sounds, etc.)
   │   │   │   └── ...
   │   │   ├── scripts/ -# Optional, used for Script API scripts.
   │   │   │   └── ...
   │   │   └── project.ts
   ├── gulpfile.js
   ├── plugins.js
   └── package.json
   ---
   ```

   `PROJECT_DIRECTORY` - The folder to house your project's code.<br>
   `NAMESPACE` - The folder containing your addon resources and script(s).<br>

   For this example, your namespace is `peanut_example`, but you can change this later.
   :::

4. Now that your project folder is set up, open it in **Visual Studio Code**.
   <image src='/getting-started/open-in-vscode.png' alt='Open folder in Visual Studio Code' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

5. In the **Explorer** on the left hand side, navigate inside of the `peanut_example/`, and then click on `project.ts` to open it.
   <image src='/getting-started/navigate-project.png' alt='Navigate to project.ts' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

6. Now navigate to the tabs in the top left, and click **Terminal** » **New Terminal**.
   <image src='/getting-started/new-terminal.png' alt='Create new terminal' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

7. In the new window at the bottom of your screen, type `npm install` or `npm i`.
   <image src='/getting-started/npm-install.png' alt='Run npm install' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

8. You should see some text fly by in your terminal; this is all of the project's **required dependencies** being installed.

9. Lastly, run the command `npm i -g peanut-framework`. This will allow you to run Peanut Framework's commands.

<div class="callout">
  <div class="title">Congratulations! 🥳</div>
  <div class="content">Your project setup is now complete.</div>
</div>

<br>

---

<br>

# Creating your Project

::: tip
If you are already an experienced programmer, you are welcome to skip to the end of this step.
:::

Let's take a look at how projects work, and how you can start making addons with Peanut!

With `project.ts` open, you might've have already begun looking at some of the example code that is already there; this is a very simple layout of what a project might look like.

When creating a new project, you need to start by making an instance of the `Project` class. In the example, we've done this with:

```ts{1}
const project = new Project("peanut_example");
```

Though the project class gives us access to all of the properties we need for our project, it does nothing on its own. For that, we need to add a line to _compile_ the project at the end of the script when it is finished.

```ts{3}
const project = new Project("peanut_example");

project.compile();
```

Great, we already have a working project! However, it doesn't really have anything to it, so let's change that!

First, let's modify the pack manifest. If you are editing the sample, just edit what is already there. Create a new name and description for your addon.

```ts{1-6}
project.manifest.properties({
  header: {
    name: "Your New Addon",
    description: "Mmm, peanut.",
  },
});
```

Fantastic! Now this addon is truly yours. There's only one thing missing... it doesn't have any features! Let's go ahead and create an example block!

```ts{1-6}
project.features = [
  new Block("peanut:block", "Peanut Block").singleTexture(
    "peanut",
    "blocks/peanut"
  ),
];
```

The `project.features` array registers all of the contained features to the project you are working on. You do **not** have to initialize your features directly inside of the array like in this example.

Using the `Block` class, we've created a new block with the identifier `peanut:block`, and the name `Peanut Block`. It also maps the texture `peanut` from the `/resources/textures/blocks/peanut` folder to every side of the block!

Your finished code should look like this:

::: details Collapse code snippet {open}

```ts
const project = new Project("peanut_example");

project.manifest.properties({
  header: {
    name: "Your New Addon",
    description: "Mmm, peanut.",
  },
});

project.features = [
  new Block("peanut:block", "Peanut Block").singleTexture(
    "peanut",
    "blocks/peanut"
  ),
];

project.compile();
```

:::

<div class="callout">
  <div class="title">Congratulations! 🎉</div>
  <div class="content">You have created your first project with Peanut.</div>
</div>

<br>

---

<br>

# Compiling your Addon

Although you now have a working project, it's not an addon yet, which means it's not usable in Minecraft. Let's change that!

In your **Terminal** from earlier, run the command `peanut build peanut_example`

::: info
_Peanut registers four terminal commands for different purposes:_

> `peanut build <path to project directory>` - Generates project behavior and resources.
>
> `peanut deploy` - Deploys your latest behavior and resource pack build to Minecraft.
>
> `peanut reload <path to project directory>` - Reloads plugins from your plugins directory.
>
> `peanut watch <path to project directory>` - Starts a watch task for your project.
>
> > This means that anytime a script in your project is saved, your project will be built, compiled, and deployed to Minecraft.

:::

Once compilation has completed, run the command `peanut deploy`.

By default, your packs will be deployed to the `/development_behavior_packs/` and `/development_resource_packs/` folders at the default location for bedrock installations.

> On windows, this can be found at: `%LocalAppData%\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\`

::: info
_If you want to change the location of deployment, you can create a `config.yaml` file in your root directory with any of the following options:_

> - behaviorPackSource [source path to deploy from, defaults to './behavior_packs']
> - resourcePackSource [source path to deploy from, defaults to './resource_packs']
> - behaviorPackTarget [target path to deploy to, defaults to '%LOCALAPPDATA%.../development_behavior_packs']
> - resourcePackTarget [target path to deploy to, defaults to '%LOCALAPPDATA%.../development_resource_packs']

:::

You should now be able to open Minecraft, apply the behavior and resource pack to your world, and use it!

To see if it worked, try giving yourself the example block you created!

```minecraft-command
/give @s peanut:block
```

<image src='/getting-started/my-new-block.png' alt='My New Block!' style='border:10px solid #202127; border-radius: 10px; pointer-events: none;'></image>

<div class="callout">
  <div class="title">Congratulations! 🕺</div>
  <div class="content">You have created your first addon with Peanut.</div>
</div>

<br>

---

<br>

# Good Work!

You have completed the [**Getting Started**](getting-started.md) guide!

If you experience any issues or have a suggestion, please create an [Issue](https://github.com/palmmc/Peanut-Framework/issues).

<div class="callout info">
  <div class="title">What's Next?</div>
  <div class="content">If you're in need of a little more guidance, try one of our other <a target=_blank href=/pages/guides.html>guides</a>!<br><br>
  If you're ready to start creating, head over to the <a target=_blank href=/docs.html>docs</a> to see what you can do!</div>
</div>

<Guide />
