import translate from "translate";
import * as fs from "fs";
/**
 * Translation class used for generating text translations.
 * @param identifier The string that is used in-game to identify the block.
 * ### Example
 * ```ts
 * new Block("peanut:example", "Example Block")
 * ```
 */
export class Language {
    constructor(...translations) {
        this.translations = new Map([
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
        this.handleData(translations);
    }
    async handleData(translations) {
        // Store translations
        for (let t of translations) {
            this.translations.get(t.source ?? "en_US").set(t.key, t.text);
            if (t.overrideTranslations)
                for (let o of t.overrideTranslations) {
                    this.translations.get(o.source).set(t.key, o.text);
                }
            for (let target of this.translations.keys()) {
                if (!this.translations.get(target).get(t.key)) {
                    const translation = await this.translate(t.text, target.slice(0, target.indexOf("_")));
                    console.log(translation);
                    this.translations.get(target).set(t.key, translation);
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
            fs.writeFileSync(`./resource_packs/example_addon/texts/${key}.lang`, data);
        }
    }
    async translate(text, target) {
        return await translate(text, target).catch((e) => {
            console.log("Unsupported language: " + e);
        });
    }
}
