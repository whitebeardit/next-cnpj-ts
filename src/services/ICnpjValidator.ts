import { CnpjValidationResult } from '../domain/CnpjValidationResult';
import { CnpjConfiguration } from '../domain/CnpjConfiguration';

/**
 * Interface for CNPJ validation.
 */
export interface ICnpjValidator {
  /**
   * Validates a CNPJ according to NTC 2025.001 rules.
   * @param cnpj - CNPJ to validate (may contain formatting).
   * @param config - Optional configuration for validation. If null, uses default configuration.
   * @returns Validation result with detailed information.
   */
  validate(
    cnpj: string | null | undefined,
    config?: CnpjConfiguration | null
  ): CnpjValidationResult;

  /**
   * Checks if a CNPJ is valid.
   * @param cnpj - CNPJ to validate (may contain formatting).
   * @param config - Optional configuration for validation. If null, uses default configuration.
   * @returns True if the CNPJ is valid.
   */
  isValid(cnpj: string | null | undefined, config?: CnpjConfiguration | null): boolean;
}
