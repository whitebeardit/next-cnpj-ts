import { ICnpjValidator } from './ICnpjValidator';
import { CnpjValidationResult } from '../domain/CnpjValidationResult';
import { CnpjConfiguration } from '../domain/CnpjConfiguration';
import { ICnpjFormatIdentifier } from './ICnpjFormatIdentifier';
import { CnpjFormatIdentifier } from './CnpjFormatIdentifier';
import { CnpjNormalizer } from '../utils/CnpjNormalizer';
import { DigitVerifierCalculator } from '../utils/DigitVerifierCalculator';

/**
 * CNPJ validator implementation according to NTC 2025.001.
 * Supports traditional numeric format and new alphanumeric format.
 */
export class CnpjValidator implements ICnpjValidator {
  private static readonly EXPECTED_LENGTH = 14;
  private static readonly ROOT_START_INDEX = 0;
  private static readonly ROOT_END_INDEX = 8;
  private static readonly ORDER_START_INDEX = 8;
  private static readonly ORDER_END_INDEX = 12;
  private static readonly DIGIT_START_INDEX = 12;

  private readonly formatIdentifier: ICnpjFormatIdentifier;

  /**
   * Creates a validator instance.
   */
  constructor(formatIdentifier?: ICnpjFormatIdentifier) {
    this.formatIdentifier = formatIdentifier || new CnpjFormatIdentifier();
  }

  /**
   * Validates a CNPJ according to NTC 2025.001 rules.
   * @param cnpj - CNPJ to validate (may contain formatting).
   * @param config - Optional configuration for validation. If null, uses default configuration.
   * @returns Validation result with detailed information.
   */
  public validate(
    cnpj: string | null | undefined,
    config?: CnpjConfiguration | null
  ): CnpjValidationResult {
    const validationConfig = config || new CnpjConfiguration();

    // Normalize CNPJ
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Validate size
    if (normalized.length !== CnpjValidator.EXPECTED_LENGTH) {
      return CnpjValidationResult.invalid(
        `CNPJ deve ter exatamente ${CnpjValidator.EXPECTED_LENGTH} caracteres. Fornecido: ${normalized.length}.`,
        normalized
      );
    }

    // Validate if all characters are the same (e.g., 00000000000000)
    if (this.allCharactersEqual(normalized)) {
      return CnpjValidationResult.invalid(
        'CNPJ inválido: todos os caracteres são iguais.',
        normalized
      );
    }

    // Identify format
    const format = this.formatIdentifier.identifyFormat(normalized);

    // Validate structure by parts
    const root = normalized.substring(
      CnpjValidator.ROOT_START_INDEX,
      CnpjValidator.ROOT_END_INDEX
    );
    const order = normalized.substring(
      CnpjValidator.ORDER_START_INDEX,
      CnpjValidator.ORDER_END_INDEX
    );
    const digits = normalized.substring(CnpjValidator.DIGIT_START_INDEX);

    // Validate check digits (must be numeric)
    if (!this.isNumeric(digits)) {
      return CnpjValidationResult.invalid(
        'Os dígitos verificadores (posições 13 e 14) devem ser exclusivamente numéricos.',
        normalized,
        format
      );
    }

    // Validate root (positions 1-8)
    const rootValidation = this.validateSegment(root, 'raiz', validationConfig);
    if (!rootValidation.isValid) {
      return CnpjValidationResult.invalid(rootValidation.errorMessage!, normalized, format);
    }

    // Validate order (positions 9-12)
    const orderValidation = this.validateSegment(order, 'ordem', validationConfig);
    if (!orderValidation.isValid) {
      return CnpjValidationResult.invalid(orderValidation.errorMessage!, normalized, format);
    }

    // Validate check digits
    if (!DigitVerifierCalculator.validateDigits(normalized)) {
      return CnpjValidationResult.invalid('Dígitos verificadores inválidos.', normalized, format);
    }

    return CnpjValidationResult.valid(format, normalized);
  }

  /**
   * Checks if a CNPJ is valid.
   * @param cnpj - CNPJ to validate (may contain formatting).
   * @param config - Optional configuration for validation. If null, uses default configuration.
   * @returns True if the CNPJ is valid.
   */
  public isValid(
    cnpj: string | null | undefined,
    config?: CnpjConfiguration | null
  ): boolean {
    return this.validate(cnpj, config).isValid;
  }

  /**
   * Validates a CNPJ segment (root or order).
   * @param segment - Segment to validate.
   * @param segmentName - Segment name (for error messages).
   * @param config - Validation configuration.
   * @returns Validation result for the segment.
   */
  private validateSegment(
    segment: string,
    segmentName: string,
    config: CnpjConfiguration
  ): CnpjValidationResult {
    for (let i = 0; i < segment.length; i++) {
      const character = segment[i];

      // Check if it is alphanumeric
      if (!this.isLetterOrDigit(character)) {
        return CnpjValidationResult.invalid(
          `O segmento ${segmentName} contém caracteres inválidos. Apenas letras (A-Z) e números (0-9) são permitidos.`
        );
      }

      // If it's a letter, check if it's in the excluded list
      if (this.isLetter(character) && config.isLetterExcluded(character)) {
        return CnpjValidationResult.invalid(
          `O segmento ${segmentName} contém a letra '${character}' que não é permitida. Letras excluídas: ${config.excludedLetters.join(', ')}.`
        );
      }
    }

    return CnpjValidationResult.valid('numeric', segment);
  }

  /**
   * Checks if all characters in a string are equal.
   * @param str - String to check.
   * @returns True if all characters are equal.
   */
  private allCharactersEqual(str: string): boolean {
    if (str.length === 0) {
      return false;
    }
    const firstChar = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== firstChar) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if a character is a letter or digit.
   * @param char - Character to check.
   * @returns True if the character is a letter or digit.
   */
  private isLetterOrDigit(char: string): boolean {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122) // a-z
    );
  }

  /**
   * Checks if a character is a letter.
   * @param char - Character to check.
   * @returns True if the character is a letter.
   */
  private isLetter(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }

  /**
   * Checks if a string contains only numeric characters.
   * @param str - String to check.
   * @returns True if the string contains only numeric characters.
   */
  private isNumeric(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (code < 48 || code > 57) {
        return false;
      }
    }
    return true;
  }
}
