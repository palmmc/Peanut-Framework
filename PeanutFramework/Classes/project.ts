import * as fs from "fs";
import { Manifest, Language } from "./classes";

export class Project {
  private id: string;
  public manifest: Manifest;
  public language: Language;
  public features: any[] = [];
  constructor(id: string) {
    this.id = id;
    this.manifest = new Manifest();
    this.language = new Language();
    const redirectory = "./resource_packs/example_addon/";
    const bedirectory = "./behavior_packs/example_addon/";
    if (fs.existsSync(redirectory))
      fs.rmdirSync(redirectory, { recursive: true });
    if (fs.existsSync(bedirectory))
      fs.rmdirSync(bedirectory, { recursive: true });
  }
  public compile() {
    for (let feature of this.features) {
      if ("compile" in feature) feature.compile();
    }
  }
}
