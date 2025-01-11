import * as fs from "fs";
import { v4 as uuid } from "uuid";
import { API_VERSION, MIN_ENGINE_VERSION, MODULE_VERSION } from "../../version";
import { Benchmark, Console } from "../../Utilities/utils";

function mergePreserveUuids(mn1: any, mn2: any) {
  for (const key in mn2) {
    if (mn2.hasOwnProperty(key)) {
      if (key === "uuid" && mn1.hasOwnProperty(key)) {
        mn2[key] = mn1[key];
      } else if (typeof mn1[key] === "object" && typeof mn2[key] === "object") {
        // Recursively merge nested objects
        mn2[key] = mergePreserveUuids(mn1[key], mn2[key]);
      }
    }
  }
  return mn2;
}

type Dependency = {
  overrideVersion?: string;
  beta?: boolean;
};

/**
 * Manifest class used to create a pack manifest.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class Manifest {
  private data: any = {
    format_version: 2,
    metadata: {
      generated_with: {
        peanut_framework: [API_VERSION],
      },
    },
  };
  private resources: any = {
    format_version: 2,
    metadata: {
      generated_with: {
        peanut_framework: [API_VERSION],
      },
    },
  };
  constructor(options?: {
    header?: {
      description?: string;
      min_engine_version?: number[];
      name?: string;
      uuid?: string;
      version?: number[];
    };
    modules?: {
      scripts?: {
        entry?: string;
      };
    };
    dependencies?: {
      server?: Dependency;
      "server-ui"?: Dependency;
      "server-net"?: Dependency;
      "server-gametest"?: Dependency;
      "server-editor"?: Dependency;
      "server-admin"?: Dependency;
      "debug-utilities"?: Dependency;
      [key: string]: Dependency;
    };
    metadata?: {
      authors?: string[];
      license?: string;
      url?: string;
    };
  }) {
    this.properties(options);
  }
  public properties(options?: {
    header?: {
      description?: string;
      min_engine_version?: number[];
      name?: string;
      uuid?: string;
      version?: number[];
    };
    modules?: {
      scripts?: {
        entry?: string;
      };
    };
    dependencies?: {
      server?: Dependency;
      "server-ui"?: Dependency;
      "server-net"?: Dependency;
      "server-gametest"?: Dependency;
      "server-editor"?: Dependency;
      "server-admin"?: Dependency;
      "debug-utilities"?: Dependency;
      [key: string]: Dependency;
    };
    metadata?: {
      authors?: string[];
      license?: string;
      url?: string;
    };
  }) {
    // Data Manifest
    this.data.header = {
      description:
        (options?.header?.description ?? "Example pack") + " (Behaviors)",
      min_engine_version:
        options?.header?.min_engine_version ?? MIN_ENGINE_VERSION,
      name: options?.header?.name ?? "Peanut Example",
      uuid: options?.header?.uuid ?? uuid(),
      version: options?.header?.version ?? [1, 0, 0],
    };
    this.data.modules = [
      {
        description: "Data Module",
        type: "data",
        uuid: uuid(),
        version: [1, 0, 0],
      },
    ];
    if (options?.modules?.scripts)
      this.data.modules.push({
        description: "Scripts Module",
        type: "script",
        uuid: uuid(),
        version: [0, 0, 1],
        entry: options?.modules?.scripts.entry ?? "scripts/main.js",
      });
    if (options?.dependencies) {
      this.data.dependencies = [];
      for (let dependency of Object.entries(options?.dependencies)) {
        let version =
          MODULE_VERSION[dependency[0] as keyof typeof MODULE_VERSION];
        let v =
          dependency[1].beta || !(version as any)["latest"]
            ? version.beta
            : (version as any)["latest"];
        dependency[1].overrideVersion ??
          this.data.dependencies.push({
            module_name: "@minecraft/" + dependency[0],
            version: dependency[1].overrideVersion ?? v,
          });
      }
    }
    this.data.metadata.authors = options?.metadata?.authors;
    this.data.metadata.license = options?.metadata?.license;
    this.data.metadata.url = options?.metadata?.url;
    // Resource Manifest
    this.resources.header = {
      description:
        (options?.header?.description ?? "Example pack") + " (Resources)",
      min_engine_version:
        options?.header?.min_engine_version ?? MIN_ENGINE_VERSION,
      name: options?.header?.name ?? "Peanut Example",
      uuid: options?.header?.uuid ?? uuid(),
      version: options?.header?.version ?? [1, 0, 0],
    };
    this.resources.modules = [
      {
        description: "Resources Module",
        type: "resources",
        uuid: uuid(),
        version: [1, 0, 0],
      },
    ];
    this.resources.metadata.authors = options?.metadata?.authors;
    this.resources.metadata.license = options?.metadata?.license;
    this.resources.metadata.url = options?.metadata?.url;
  }
  /**
   * Compiles a finished manifest class to JSON. Use after all other methods on this instance to generate it.
   */
  public compile(rePath: string, bePath: string, oldManifest?: any) {
    const startTime = Benchmark.set();
    let errors = 0;
    try {
      rePath += "/manifest.json";
      bePath += "/manifest.json";
      // Generate Data Manifest
      let data: any;
      if (oldManifest?.be) data = mergePreserveUuids(oldManifest.be, this.data);
      else data = this.data;
      fs.writeFileSync(bePath, JSON.stringify(data, null, 2));
      // Generate Resource Manifest
      if (oldManifest?.re)
        data = mergePreserveUuids(oldManifest.re, this.resources);
      else data = this.resources;
      fs.writeFileSync(rePath, JSON.stringify(data, null, 2));
    } catch (e) {
      errors++;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    let bedata = "b";
    if (this.data.modules.find((x: any) => x.type == "script"))
      bedata += " -§cs§r";
    let redata = "r";
    if (errors > 0)
      Console.queue.custom(
        `§2Manifest §cfailure§r: '§c${errors}§r errors'`,
        0,
        elapsed
      );
    else
      Console.queue.custom(
        `§2Manifest §bgenerate§r: '[${bedata}; ${redata}]'`,
        0,
        elapsed
      );
  }
}
