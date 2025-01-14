import { Block, LanguageKey, Molang } from "peanut-framework";

/**
 * My new block preset class based off of the Block class.
 * ```
 */
export class MyClass extends Block {
  constructor(
    identifier: string,
    displayName?: string,
    language?: LanguageKey
  ) {
    super(identifier, displayName, language);
  }
}
