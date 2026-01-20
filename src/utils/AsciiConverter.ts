/**
 * Utility for converting characters to numeric values using ASCII table.
 * Converts according to rule: ASCII value - 48.
 */
export class AsciiConverter {
  /**
   * Converts a character to its numeric value based on ASCII table.
   * Formula: ASCII value - 48
   * @param character - Character to convert (numeric or alphabetic).
   * @returns Numeric value corresponding to the character.
   * @remarks
   * Numeric characters (0-9) maintain their values (0-9).
   * Alphabetic characters assume specific values (A=17, B=18, C=19, etc.).
   */
  public static toNumericValue(character: string): number {
    if (character.length !== 1) {
      throw new Error('Character must be a single character string');
    }
    return character.charCodeAt(0) - 48;
  }
}
