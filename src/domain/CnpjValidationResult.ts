import { CnpjFormat } from './CnpjFormat';

/**
 * Represents the result of CNPJ validation.
 */
export class CnpjValidationResult {
  /**
   * Indicates if the CNPJ is valid.
   */
  public readonly isValid: boolean;

  /**
   * Identified format of the CNPJ (Numeric or Alphanumeric).
   */
  public readonly format: CnpjFormat;

  /**
   * Error message if validation fails. Null if valid.
   */
  public readonly errorMessage: string | null;

  /**
   * Normalized CNPJ (without formatting, only alphanumeric characters).
   */
  public readonly normalizedCnpj: string;

  /**
   * Creates a valid result instance.
   * @param format - CNPJ format.
   * @param normalizedCnpj - Normalized CNPJ.
   */
  public static valid(format: CnpjFormat, normalizedCnpj: string): CnpjValidationResult {
    return new CnpjValidationResult(true, format, null, normalizedCnpj);
  }

  /**
   * Creates an invalid result instance.
   * @param errorMessage - Error message.
   * @param normalizedCnpj - Normalized CNPJ (may be empty if normalization failed).
   * @param format - Identified format, if any.
   */
  public static invalid(
    errorMessage: string,
    normalizedCnpj: string = '',
    format: CnpjFormat = 'numeric'
  ): CnpjValidationResult {
    return new CnpjValidationResult(false, format, errorMessage, normalizedCnpj);
  }

  /**
   * Private constructor. Use factory methods instead.
   */
  private constructor(
    isValid: boolean,
    format: CnpjFormat,
    errorMessage: string | null,
    normalizedCnpj: string
  ) {
    this.isValid = isValid;
    this.format = format;
    this.errorMessage = errorMessage;
    this.normalizedCnpj = normalizedCnpj;
  }
}
