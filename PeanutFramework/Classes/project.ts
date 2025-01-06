import { Manifest } from "./manifest";

class Project {
  private id: string;
  public manifest: Manifest;
  constructor(id: string) {
    this.id = id;
  }
}
