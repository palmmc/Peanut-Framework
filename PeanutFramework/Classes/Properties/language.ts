import translate from "translate";
import * as fs from "fs";
import { Console } from "../../Utilities/utils";

type LanguageKey =
  | "id_ID"
  | "da_DK"
  | "de_DE"
  | "en_GB"
  | "en_US"
  | "es_ES"
  | "es_MX"
  | "fr_CA"
  | "fr_FR"
  | "it_IT"
  | "hu_HU"
  | "nl_NL"
  | "nb_NO"
  | "pl_PL"
  | "pt_BR"
  | "pt_PT"
  | "sk_SK"
  | "fi_FI"
  | "sv_SE"
  | "tr_TR"
  | "cs_CZ"
  | "el_GR"
  | "bg_BG"
  | "ru_RU"
  | "uk_UA"
  | "ja_JP"
  | "zh_CN"
  | "zh_TW"
  | "ko_KR";

/**
 * Translation class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class Language {
  private automaticTranslation: boolean = false;
  private translations: Map<string, Map<string, string>> = new Map([
    ["id_ID", new Map([])],
    ["da_DK", new Map([])],
    ["de_DE", new Map([])],
    ["en_GB", new Map([])],
    ["en_US", new Map([])],
    ["es_ES", new Map([])],
    ["es_MX", new Map([])],
    ["fr_CA", new Map([])],
    ["fr_FR", new Map([])],
    ["it_IT", new Map([])],
    ["hu_HU", new Map([])],
    ["nl_NL", new Map([])],
    ["nb_NO", new Map([])],
    ["pl_PL", new Map([])],
    ["pt_BR", new Map([])],
    ["pt_PT", new Map([])],
    ["sk_SK", new Map([])],
    ["fi_FI", new Map([])],
    ["sv_SE", new Map([])],
    ["tr_TR", new Map([])],
    ["cs_CZ", new Map([])],
    ["el_GR", new Map([])],
    ["bg_BG", new Map([])],
    ["ru_RU", new Map([])],
    ["uk_UA", new Map([])],
    ["ja_JP", new Map([])],
    ["zh_CN", new Map([])],
    ["zh_TW", new Map([])],
    ["ko_KR", new Map([])],
  ]);
  constructor() {}
  public autoTranslate(options?: {
    whitelistAsBlacklist?: boolean;
    whitelistLanguages?: LanguageKey[];
  }) {
    this.automaticTranslation = true;
    if (options) {
      // Blacklist languages
      if (options.whitelistAsBlacklist)
        for (let lang of options.whitelistLanguages) {
          if (lang === "en_US") continue;
          this.translations.delete(lang);
        }
      // Whitelist languages
      else {
        const translations: Map<string, Map<string, string>> = new Map([
          ["en_US", new Map([])],
        ]);
        for (let lang of options.whitelistLanguages)
          translations.set(lang, new Map([]));
        this.translations = translations;
      }
    }
    return this;
  }
  public async translate(
    ...translations: {
      source?: LanguageKey;
      key: string;
      text: string;
      overrideTranslations?: {
        source: LanguageKey;
        text: string;
      }[];
    }[]
  ) {
    // Store translations
    for (let t of translations) {
      try {
        this.translations.get(t.source ?? "en_US").set(t.key, t.text);
        if (t.overrideTranslations)
          for (let o of t.overrideTranslations) {
            try {
              this.translations.get(o.source).set(t.key, o.text);
            } catch (e) {
              Console.log(
                `Missing language map '${o.source}'. Make sure you are not blacklisting a language that is currently in use.`
              );
            }
          }
      } catch (e) {
        Console.log(
          `Missing language map '${t.source}'. Make sure you are not blacklisting a language that is currently in use.`
        );
      }
      // Automatic translation
      if (this.automaticTranslation === true) {
        for (let target of this.translations.keys()) {
          if (!this.translations.get(target).get(t.key)) {
            const translation = await this.feed(
              t.text,
              target.slice(0, target.indexOf("_"))
            );
            this.translations.get(target).set(t.key, translation as any);
          }
        }
      }
    }
    // Compile
    let lines = 0;
    for (let key of this.translations.keys()) {
      let data = "";
      const directoryPath = "./resource_packs/example_addon/texts";
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }
      for (let t of this.translations.get(key).entries()) {
        data += `${t[0]}=${t[1]}\n`;
        lines++;
      }
      if (data.length > 0) {
        fs.writeFileSync(
          `./resource_packs/example_addon/texts/${key}.lang`,
          data
        );
      }
    }
    Console.log(
      `§5Compilation §asuccessful§r: §2texts§r, [${this.translations.size} languages, ${lines} lines]`
    );
  }
  private async feed(text: string, target: string) {
    return await translate(text, target).catch((e) => {
      Console.log("Unsupported language: " + e);
    });
  }
}
