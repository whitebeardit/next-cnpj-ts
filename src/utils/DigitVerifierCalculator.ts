import { AsciiConverter } from './AsciiConverter';

/**
 * Utility for calculation and validation of CNPJ check digits.
 * Implements modulo 11 algorithm with ASCII conversion.
 */
export class DigitVerifierCalculator {
  private static readonly MODULO = 11;
  private static readonly MIN_WEIGHT = 2;
  private static readonly MAX_WEIGHT = 9;
  private static readonly EXPECTED_LENGTH = 14;
  private static readonly BASE_LENGTH = 12;

  /**
   * Calculates the first check digit of CNPJ.
   * @param cnpjBase - First 12 positions of CNPJ (root + order).
   * @returns First check digit (0-9), or -1 if invalid input.
   */
  public static calculateFirstDigit(cnpjBase: string): number {
    if (!cnpjBase || cnpjBase.length !== this.BASE_LENGTH) {
      return -1;
    }

    let sum = 0;
    let weight = this.MIN_WEIGHT;

    // Calculate from right to left (positions 12 to 1)
    for (let i = cnpjBase.length - 1; i >= 0; i--) {
      const numericValue = AsciiConverter.toNumericValue(cnpjBase[i]);
      sum += numericValue * weight;

      weight++;
      if (weight > this.MAX_WEIGHT) {
        weight = this.MIN_WEIGHT;
      }
    }

    const remainder = sum % this.MODULO;
    const digit = this.MODULO - remainder;

    // If result is 10 or 11, digit is 0
    return digit >= 10 ? 0 : digit;
  }

  /**
   * Calculates the second check digit of CNPJ.
   * @param cnpjBase - First 12 positions of CNPJ (root + order).
   * @param firstDigit - First check digit already calculated.
   * @returns Second check digit (0-9), or -1 if invalid input.
   */
  public static calculateSecondDigit(cnpjBase: string, firstDigit: number): number {
    if (!cnpjBase || cnpjBase.length !== this.BASE_LENGTH) {
      return -1;
    }

    // Concatenate base with first digit to calculate second
    const cnpjWithFirstDigit = cnpjBase + firstDigit.toString();

    let sum = 0;
    let weight = this.MIN_WEIGHT;

    // Calculate from right to left (positions 13 to 1)
    for (let i = cnpjWithFirstDigit.length - 1; i >= 0; i--) {
      const numericValue = AsciiConverter.toNumericValue(cnpjWithFirstDigit[i]);
      sum += numericValue * weight;

      weight++;
      if (weight > this.MAX_WEIGHT) {
        weight = this.MIN_WEIGHT;
      }
    }

    const remainder = sum % this.MODULO;
    const digit = this.MODULO - remainder;

    // If result is 10 or 11, digit is 0
    return digit >= 10 ? 0 : digit;
  }

  /**
   * Validates the check digits of a complete CNPJ (14 positions).
   * @param cnpj - Complete CNPJ with 14 positions.
   * @returns True if check digits are correct.
   */
  public static validateDigits(cnpj: string): boolean {
    if (!cnpj || cnpj.length !== this.EXPECTED_LENGTH) {
      return false;
    }

    const baseCnpj = cnpj.substring(0, this.BASE_LENGTH);
    const firstDigitProvided = parseInt(cnpj[this.BASE_LENGTH], 10);
    const secondDigitProvided = parseInt(cnpj[this.BASE_LENGTH + 1], 10);

    if (isNaN(firstDigitProvided) || isNaN(secondDigitProvided)) {
      return false;
    }

    const firstDigitCalculated = this.calculateFirstDigit(baseCnpj);
    const secondDigitCalculated = this.calculateSecondDigit(baseCnpj, firstDigitCalculated);

    return (
      firstDigitCalculated === firstDigitProvided &&
      secondDigitCalculated === secondDigitProvided
    );
  }
}
