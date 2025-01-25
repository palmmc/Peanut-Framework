import * as fs from "fs";
import { v4 as uuid } from "uuid";
import { API_VERSION, MIN_ENGINE_VERSION, MODULE_VERSION } from "../../version";
import { Benchmark, Console } from "../../Utilities/utils";

/**
 * Merges two manifest objects, preserving UUIDs from the first manifest.
 * @param mn1 The first manifest object to merge.
 * @param mn2 The second manifest object to merge, whose properties will be overridden by mn1 where applicable.
 * @returns The merged manifest object.
 */
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
 * Manifest class used to create and manage the manifest of a Minecraft resource or behavior pack.
 * This class provides methods to define metadata, dependencies, modules, and to compile the manifest into JSON.
 * @param options Options for constructing a manifest.
 * @example
 * ```ts
 * project.manifest = new Manifest({
 *    header: { name: "Peanut Example", description: "Example pack" },
 * });
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

  /**
   * Constructs the Manifest object and initializes the properties with the provided options.
   * @param options Configuration options for the manifest.
   * - header: Defines the pack's name, description, version, and other metadata.
   * - modules: Defines the script entry point and other modules for the pack.
   * - dependencies: Defines the dependencies of the pack (such as server modules).
   * - metadata: Additional metadata like authors, license, and URL.
   */
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

  /**
   * Sets the properties for the manifest object using the provided options.
   * This method updates the header, modules, dependencies, and metadata of the manifest.
   * @param options Configuration options to set the properties.
   */
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
        entry: "scripts/" + (options?.modules?.scripts.entry ?? "main.js"),
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
   * Compiles the manifest into JSON format and writes it to the specified file paths.
   * The method generates two separate manifest files, one for resources and one for behaviors.
   * @param rePath Path where the resource manifest should be saved.
   * @param bePath Path where the behavior manifest should be saved.
   * @param oldManifest Optionally provide old manifest data to merge with the new manifest.
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
