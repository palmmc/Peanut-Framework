/**
 * Represents the supported language keys for the system.
 * 
 * These language keys correspond to specific regional language codes that define the language
 * and its regional variant for localization purposes.
 * 
 * Each key follows the format of a two-letter language code, followed by a two-letter country code, 
 * separated by an underscore (e.g., `"en_US"` for English (United States)).
*/
export type LanguageKey =
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
