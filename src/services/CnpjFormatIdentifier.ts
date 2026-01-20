import { CnpjFormat } from '../domain/CnpjFormat';
import { ICnpjFormatIdentifier } from './ICnpjFormatIdentifier';
import { CnpjNormalizer } from '../utils/CnpjNormalizer';

/**
 * Implementation for CNPJ format identification.
 */
export class CnpjFormatIdentifier implements ICnpjFormatIdentifier {
  private static readonly EXPECTED_LENGTH = 14;
  private static readonly ROOT_END_INDEX = 8;
  private static readonly ORDER_END_INDEX = 12;

  /**
   * Identifies the CNPJ format.
   * @param cnpj - CNPJ to analyze (may contain formatting).
   * @returns Identified format (Numeric or Alphanumeric).
   */
  public identifyFormat(cnpj: string | null | undefined): CnpjFormat {
    if (!cnpj) {
      return 'numeric';
    }

    const normalized = CnpjNormalizer.normalize(cnpj);

    if (normalized.length !== CnpjFormatIdentifier.EXPECTED_LENGTH) {
      return 'numeric';
    }

    // Check if there are letters in root (positions 1-8) or order (positions 9-12)
    const root = normalized.substring(0, CnpjFormatIdentifier.ROOT_END_INDEX);
    const order = normalized.substring(
      CnpjFormatIdentifier.ROOT_END_INDEX,
      CnpjFormatIdentifier.ORDER_END_INDEX
    );

    const hasLettersInRoot = this.hasLetters(root);
    const hasLettersInOrder = this.hasLetters(order);

    return hasLettersInRoot || hasLettersInOrder ? 'alphanumeric' : 'numeric';
  }

  /**
   * Checks if the CNPJ is alphanumeric.
   * @param cnpj - CNPJ to analyze (may contain formatting).
   * @returns True if the CNPJ contains letters in root or order.
   */
  public isAlphanumeric(cnpj: string | null | undefined): boolean {
    return this.identifyFormat(cnpj) === 'alphanumeric';
  }

  /**
   * Checks if the CNPJ is exclusively numeric.
   * @param cnpj - CNPJ to analyze (may contain formatting).
   * @returns True if the CNPJ contains only numbers.
   */
  public isNumeric(cnpj: string | null | undefined): boolean {
    return this.identifyFormat(cnpj) === 'numeric';
  }

  /**
   * Checks if a string contains letters.
   * @param str - String to check.
   * @returns True if the string contains at least one letter.
   */
  private hasLetters(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return true;
      }
    }
    return false;
  }
}
