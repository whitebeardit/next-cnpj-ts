import { CnpjFormat } from '../domain/CnpjFormat';

/**
 * Interface for CNPJ format identification (numeric or alphanumeric).
 */
export interface ICnpjFormatIdentifier {
  /**
   * Identifies the CNPJ format.
   * @param cnpj - CNPJ to analyze (may contain formatting).
   * @returns Identified format (Numeric or Alphanumeric).
   */
  identifyFormat(cnpj: string | null | undefined): CnpjFormat;

  /**
   * Checks if the CNPJ is alphanumeric.
   * @param cnpj - CNPJ to analyze (may contain formatting).
   * @returns True if the CNPJ contains letters in root or order.
   */
  isAlphanumeric(cnpj: string | null | undefined): boolean;

  /**
   * Checks if the CNPJ is exclusively numeric.
   * @param cnpj - CNPJ to analyze (may contain formatting).
   * @returns True if the CNPJ contains only numbers.
   */
  isNumeric(cnpj: string | null | undefined): boolean;
}
