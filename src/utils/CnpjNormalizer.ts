/**
 * Utility for CNPJ normalization.
 * Removes formatting and converts letters to uppercase.
 */
export class CnpjNormalizer {
  /**
   * Normalizes a CNPJ by removing formatting and converting to uppercase.
   * @param cnpj - CNPJ to normalize.
   * @returns Normalized CNPJ (only alphanumeric characters in uppercase).
   */
  public static normalize(cnpj: string | null | undefined): string {
    if (!cnpj) {
      return '';
    }

    const normalized: string[] = [];

    for (let i = 0; i < cnpj.length; i++) {
      const char = cnpj[i];
      if (this.isLetterOrDigit(char)) {
        normalized.push(char.toUpperCase());
      }
    }

    return normalized.join('');
  }

  /**
   * Checks if a character is a letter or digit.
   * @param char - Character to check.
   * @returns True if the character is a letter or digit.
   */
  private static isLetterOrDigit(char: string): boolean {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122) // a-z
    );
  }
}
