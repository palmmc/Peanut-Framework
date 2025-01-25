import translate from "translate";
import * as fs from "fs";
import { Benchmark, Console, defaultLanguages } from "../../Utilities/utils";
import { LanguageKey } from "../../Types/types";

/**
 * Translation class used for generating text translations.
 *
 * This class helps in creating language files for multiple translations.
 * It generates `.lang` files for each language, which includes the translations for specific keys.
 * The translations can be automatically generated for supported languages if required.
 * 
 * @example
 * ```ts
 * project.language.translate({
 *    entries: [
 *      {
 *        key: "accessibility.chat.howtoopen",
 *        text: "Press T to tell us you like Cookies!",
 *        overrideTranslation: [{ source: "en_GB", text: "Press T to tell us you like Biscuits!" }],
 *      },
 *    ],
 * });
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

  /**
   * Configures the language settings, including whitelisting and blacklisting languages.
   *
   * @param options Configuration options for language whitelisting or blacklisting.
   * - `whitelistAsBlacklist`: If `true`, languages not listed in `whitelistLanguages` will be excluded.
   * - `whitelistLanguages`: List of languages that should be included. 
   */
  constructor(options?: {
    whitelistAsBlacklist?: boolean;
    whitelistLanguages?: LanguageKey[];
  }) {
    this.configure(options);
  }

  /**
   * Configures the language settings based on provided options.
   * Allows specifying languages to be whitelisted or blacklisted.
   *
   * @param options Configuration options for language whitelisting or blacklisting.
   */
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

  /**
   * Enables automatic translation for languages not listed in the source language.
   * 
   * @returns The current instance of the Language class.
   */
  public autoTranslate() {
    this.automaticTranslation = true;
    return this;
  }

  /**
   * Adds translations to the translation queue.
   * 
   * @param translations Array of translation objects.
   * Each object contains language-specific entries for keys and their respective translations.
   */
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

  /**
   * Compiles all translations and writes them to `.lang` files for each supported language.
   * If there is an error during compilation, it logs the number of errors and the time taken.
   */
  public async compile() {
    if (!this.projectId || this.projectId == "unknown") {
      Console.queue.custom(
        `§aLanguage §cfailure§r: Property must be linked to a project.\n  §rSet it with §9project§f.§blanguage§r = §bthis§r`,
        0
      );
      return;
    }
    if (this.rawInput.length <= 0) return;
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

  /**
   * Translates the provided text to the target language.
   * 
   * @param text The text to be translated.
   * @param target The target language for the translation.
   * @returns The translated text.
   */
  private async feed(text: string, target: string) {
    return await translate(text, target).catch((e: Error) => {
      Console.log("Unsupported language: " + e);
    });
  }
}
