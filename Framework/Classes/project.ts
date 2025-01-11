import * as fs from "fs";
import { Manifest, Language, TerrainMap, BlockMap, ItemMap } from "./classes";
import { Benchmark, Console } from "../Utilities/utils";

export class Project {
  private id: string;
  private redir: string;
  private bedir: string;
  private oldManifest: { re?: any; be?: any } = {};
  public manifest: Manifest;
  public language: Language;
  public terrainMap: TerrainMap;
  public blockMap: BlockMap;
  public itemMap: ItemMap;
  public features: any[] = [];
  constructor(id: string) {
    this.id = id;
    // Initialize project properties.
    this.manifest = new Manifest();
    this.language = new Language();
    this.terrainMap = new TerrainMap();
    this.blockMap = new BlockMap();
    this.itemMap = new ItemMap();
    // Create ./rp_packs and ./bp_packs folders.
    let redir = "./resource_packs";
    let bedir = "./behavior_packs";
    if (!fs.existsSync(redir)) fs.mkdirSync(redir);
    if (!fs.existsSync(bedir)) fs.mkdirSync(bedir);
    // Create or remove target pack folder.
    redir += `/${id}`;
    bedir += `/${id}`;
    if (!fs.existsSync(redir)) fs.mkdirSync(redir);
    if (!fs.existsSync(bedir)) fs.mkdirSync(bedir);
    if (fs.existsSync(redir)) {
      const reManifest = redir + "/manifest.json";
      if (fs.existsSync(reManifest))
        this.oldManifest.re = JSON.parse(fs.readFileSync(reManifest, "utf-8"));
      fs.rmdirSync(redir, { recursive: true });
    }
    fs.mkdirSync(redir);
    if (fs.existsSync(bedir)) {
      const beManifest = bedir + "/manifest.json";
      if (fs.existsSync(beManifest))
        this.oldManifest.be = JSON.parse(fs.readFileSync(beManifest, "utf-8"));
      fs.rmdirSync(bedir, { recursive: true });
    }
    fs.mkdirSync(bedir);
    this.redir = redir;
    this.bedir = bedir;
  }
  public async compile() {
    const startTime = Benchmark.set();
    Console.queue.custom(`§5Compiling §r'§9${this.id}§r'...`, 0);
    await this.manifest.compile(this.redir, this.bedir, this.oldManifest);
    for (let feature of this.features) {
      if ("projectId" in feature) feature.projectId = this.id;
      if ("compile" in feature) await feature.compile(this);
    }
    (this.language as any).projectId = this.id;
    await this.language.compile();
    (this.blockMap as any).projectId = this.id;
    await this.blockMap.compile(this.redir);
    (this.terrainMap as any).projectId = this.id;
    await this.terrainMap.compile(this.redir);
    (this.itemMap as any).projectId = this.id;
    await this.itemMap.compile(this.redir);
    const resrc = `./${this.id}/resources`;
    const redest = this.redir + "/textures";
    try {
      await this.copyFolderSync(resrc, redest);
    } catch (e) {
      Console.log(
        "§cError: §rOne or more directories does not exist.\n§bCheck to make sure the name of your project folder and your project ID match.§r"
      );
      return;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    Console.queue.custom("§l§5Compilation completed§r", 5, elapsed);
    Console.writeQueue();
  }
  private async copyFolderSync(resrc: string, redest: string) {
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
