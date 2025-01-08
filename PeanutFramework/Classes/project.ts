import * as fs from "fs";
import { Manifest, Language } from "./classes";
import { Benchmark, Console } from "../Utilities/utils";

export class Project {
  private id: string;
  private redir: string;
  private bedir: string;
  private oldManifest: { re?: any; be?: any } = {};
  public manifest: Manifest;
  public language: Language;
  public features: any[] = [];
  constructor(id: string) {
    this.id = id;
    this.manifest = new Manifest();
    this.language = new Language();
    let redir = "./resource_packs";
    let bedir = "./behavior_packs";
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
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    Console.queue.custom("§l§5Compilation completed§r", 5, elapsed);
    Console.writeQueue();
  }
}
