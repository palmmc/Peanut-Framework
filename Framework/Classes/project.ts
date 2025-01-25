import * as fs from "fs";
import { Manifest, Language, TerrainMap, BlockMap, ItemMap } from "./classes";
import { Benchmark, Console } from "../Utilities/utils";

/**
 * Represents a project that handles the compilation and management of resource and behavior packs for Minecraft.
 */
export class Project {
  /** The unique identifier for the project. */
  private id: string;

  /** Path to the resource pack directory. */
  private redir: string;

  /** Path to the behavior pack directory. */
  private bedir: string;

  /** Stores the existing manifests from previous compilations for resource and behavior packs. */
  private oldManifest: { re?: any; be?: any } = {};

  /** The manifest configuration for the project. */
  public manifest: Manifest;

  /** The language configuration for the project. */
  public language: Language;

  /** The terrain map configuration for the project. */
  public terrainMap: TerrainMap;

  /** The block map configuration for the project. */
  public blockMap: BlockMap;

  /** The item map configuration for the project. */
  public itemMap: ItemMap;

  /** Array of additional features or modules associated with the project. */
  public features: any[] = [];

  /**
   * Initializes a new instance of the Project class.
   * @param id - The unique identifier for the project.
   */
  constructor(id: string) {
    this.id = id;

    // Initialize project properties.
    this.manifest = new Manifest();
    this.language = new Language();
    this.terrainMap = new TerrainMap();
    this.blockMap = new BlockMap();
    this.itemMap = new ItemMap();

    // Define default directories for resource and behavior packs.
    let redir = "./resource_packs";
    let bedir = "./behavior_packs";

    // Ensure default directories exist.
    if (!fs.existsSync(redir)) fs.mkdirSync(redir);
    if (!fs.existsSync(bedir)) fs.mkdirSync(bedir);

    // Define and manage the project-specific directories.
    redir += `/${id}`;
    bedir += `/${id}`;
    if (!fs.existsSync(redir)) fs.mkdirSync(redir);
    if (!fs.existsSync(bedir)) fs.mkdirSync(bedir);

    // Load or clear existing manifests for resource and behavior packs.
    if (fs.existsSync(redir)) {
      const reManifest = redir + "/manifest.json";
      if (fs.existsSync(reManifest)) {
        this.oldManifest.re = JSON.parse(fs.readFileSync(reManifest, "utf-8"));
      }
      fs.rmdirSync(redir, { recursive: true });
    }
    fs.mkdirSync(redir);

    if (fs.existsSync(bedir)) {
      const beManifest = bedir + "/manifest.json";
      if (fs.existsSync(beManifest)) {
        this.oldManifest.be = JSON.parse(fs.readFileSync(beManifest, "utf-8"));
      }
      fs.rmdirSync(bedir, { recursive: true });
    }
    fs.mkdirSync(bedir);

    this.redir = redir;
    this.bedir = bedir;
  }

  /**
   * Compiles the project, including all resource and behavior packs and associated features.
   */
  public async compile(): Promise<void> {
    const startTime = Benchmark.set();
    Console.queue.custom(`§5Compiling §r'§9${this.id}§r'...`, 0);

    // Compile the manifest.
    await this.manifest.compile(this.redir, this.bedir, this.oldManifest);

    // Compile additional features.
    for (let feature of this.features) {
      if ("projectId" in feature) feature.projectId = this.id;
      if ("compile" in feature) await feature.compile(this);
    }

    // Compile other configurations.
    (this.language as any).projectId = this.id;
    await this.language.compile();
    (this.blockMap as any).projectId = this.id;
    await this.blockMap.compile(this.redir);
    (this.terrainMap as any).projectId = this.id;
    await this.terrainMap.compile(this.redir);
    (this.itemMap as any).projectId = this.id;
    await this.itemMap.compile(this.redir);

    // Copy additional resources.
    const resrc = `./${this.id}/resources`;
    const redest = this.redir;
    if (fs.existsSync(resrc)) await this.copyFolderSync(resrc, redest);

    // Complete compilation and log the elapsed time.
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    Console.queue.custom("§l§5Compilation completed§r", 5, elapsed);
    Console.writeQueue();
  }

  /**
   * Recursively copies the contents of one folder to another.
   * @param resrc - The source folder path.
   * @param redest - The destination folder path.
   */
  private async copyFolderSync(resrc: string, redest: string): Promise<void> {
    if (!fs.existsSync(redest)) {
      await fs.mkdirSync(redest, { recursive: true });
    }

    const files = await fs.readdirSync(resrc);
    for (const file of files) {
      const sourcePath = `${resrc}/${file}`;
      const destinationPath = `${redest}/${file}`;

      const stat = fs.statSync(sourcePath);
      if (stat.isFile()) {
        await fs.copyFileSync(sourcePath, destinationPath);
      } else if (stat.isDirectory()) {
        await this.copyFolderSync(sourcePath, destinationPath);
      }
    }
  }
}
