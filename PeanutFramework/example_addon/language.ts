import { Language } from "../Classes/language";

new Language().translate(
  { key: "tile.mud.name", text: "Brown Goop" },
  {
    key: "accessibility.chat.howtoopen",
    text: "Cookies!",
    overrideTranslations: [{ source: "en_GB", text: "Biscuits!" }],
  }
);
