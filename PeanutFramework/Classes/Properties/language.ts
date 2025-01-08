import translate from "translate";
import * as fs from "fs";
import { Benchmark, Console, defaultLanguages } from "../../Utilities/utils";
import { LanguageKey } from "../../Types/types";

/**
 * Translation class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class Language {
  private projectId: string = "unknown";
  private automaticTranslation: boolean = false;
  private rawInput: {
    source?: LanguageKey;
    entries: {
      key: string;
      text: string;
      overrideTranslation?: [
        {
          source: LanguageKey;
          text: string;
        }
      ];
    }[];
  }[] = [];
  private languages: LanguageKey[] = defaultLanguages;
  constructor(options?: {
    whitelistAsBlacklist?: boolean;
    whitelistLanguages?: LanguageKey[];
  }) {
    this.configure(options);
  }
  public async configure(options?: {
    whitelistAsBlacklist?: boolean;
    whitelistLanguages?: LanguageKey[];
  }) {
    // Blacklist languages
    if (options?.whitelistAsBlacklist) {
      const languages = defaultLanguages;
      if (options?.whitelistLanguages)
        for (let lang of options.whitelistLanguages) {
          if (lang === "en_US") continue;
          this.languages.splice(this.languages.indexOf(lang), 1);
        }
      this.languages = languages;
    }
    // Whitelist languages
    else {
      const languages: LanguageKey[] = ["en_US"];
      if (options?.whitelistLanguages)
        for (let lang of options.whitelistLanguages) languages.push(lang);
      this.languages = languages;
    }
  }
  public autoTranslate() {
    this.automaticTranslation = true;
    return this;
  }
  public translate(
    ...translations: {
      source?: LanguageKey;
      entries: {
        key: string;
        text: string;
        overrideTranslation?: [
          {
            source: LanguageKey;
            text: string;
          }
        ];
      }[];
    }[]
  ) {
    this.rawInput = this.rawInput.concat(translations);
  }
  public async compile() {
    if (!this.projectId || this.projectId == "unknown") {
      Console.queue.custom(
        `§aLanguage §cfailure§r: Property must be linked to a project.\n  §rSet it with §9project§f.§blanguage§r = §bthis§r`,
        0
      );
      return;
    }
    const translations = this.rawInput;
    const startTime = Benchmark.set();
    let errors = 0;
    let lines = 0;
    const directoryPath = `./resource_packs/${this.projectId}/texts`;
    const langData: { [key: string]: string } = {};
    function pushLangData(source: LanguageKey, key: string, text: string) {
      langData[source] ??= "";
      langData[source] += `${key}=${text}\n`;
    }
    // Compile
    try {
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }
      for (const t of translations) {
        t.source = t.source ?? "en_US";
        if (!this.languages.includes(t.source)) continue;
        for (const k of t.entries) {
          pushLangData(t.source, k.key, k.text);
          lines++;
          let overrideMap = new Map();
          if (k.overrideTranslation)
            overrideMap = new Map(
              k.overrideTranslation.map((x) => [x.source, x.text])
            );
          if (this.automaticTranslation) {
            for (let language of this.languages) {
              if (language == t.source || overrideMap.has(language)) continue;
              pushLangData(
                language,
                k.key,
                (await this.feed(
                  k.text,
                  language.slice(0, language.indexOf("_"))
                )) || undefined
              );
              lines++;
            }
          }
          for (let override of overrideMap.entries()) {
            pushLangData(override[0], k.key, override[1]);
            lines++;
          }
        }
      }

      // Write the compiled data to files
      for (const key in langData) {
        if (langData.hasOwnProperty(key) && langData[key].length > 0) {
          fs.writeFileSync(
            `./resource_packs/${this.projectId}/texts/${key}.lang`,
            langData[key]
          );
        }
      }
    } catch (e) {
      errors++;
    }
    const endTime = Benchmark.set();
    const elapsed = Benchmark.elapsed(startTime, endTime);
    const languages = Object.keys(langData).length;
    if (errors > 0) {
      Console.queue.custom(
        `§aLanguage §cfailure§r: '[§e${languages}§r lang; §b${lines}§r line; §c${errors} §rerrors]'`,
        0,
        elapsed
      );
    } else {
      Console.queue.custom(
        `§aLanguage §bgenerate§r: '[§e${languages}§r lang; §b${lines}§r line]'`,
        0,
        elapsed
      );
    }
  }
  private async feed(text: string, target: string) {
    return await translate(text, target).catch((e) => {
      Console.log("Unsupported language: " + e);
    });
  }
}
