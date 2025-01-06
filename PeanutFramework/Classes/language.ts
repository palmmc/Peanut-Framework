import translate from "translate";
import * as fs from "fs";

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
  private options: { blacklistLanguages?: LanguageKey[] };
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
  constructor(options?: { blacklistLanguages?: LanguageKey[] }) {
    this.options = options ?? {};
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
    // Blacklist languages
    if (this.options.blacklistLanguages)
      for (let lang of this.options.blacklistLanguages) {
        this.translations.delete(lang);
      }
    // Store translations
    for (let t of translations) {
      this.translations.get(t.source ?? "en_US").set(t.key, t.text);
      if (t.overrideTranslations)
        for (let o of t.overrideTranslations) {
          this.translations.get(o.source).set(t.key, o.text);
        }
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
    // Compile
    for (let key of this.translations.keys()) {
      let data = "";
      const directoryPath = "./resource_packs/example_addon/texts";
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }
      for (let t of this.translations.get(key).entries()) {
        data += `${t[0]}=${t[1]}\n`;
      }
      fs.writeFileSync(
        `./resource_packs/example_addon/texts/${key}.lang`,
        data
      );
    }
    console.log(`Compilation successful: lang ( - ${this.translations.size})`);
  }
  private async feed(text: string, target: string) {
    return await translate(text, target).catch((e) => {
      console.log("Unsupported language: " + e);
    });
  }
}
