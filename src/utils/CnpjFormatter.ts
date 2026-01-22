import { CnpjNormalizer } from './CnpjNormalizer';

/**
 * Utility class for formatting CNPJ strings with the standard Brazilian mask.
 */
export class CnpjFormatter {
  private static readonly EXPECTED_LENGTH = 14;

  /**
   * Formats a CNPJ with the standard Brazilian mask: XX.XXX.XXX/XXXX-XX.
   * @param cnpj - The CNPJ string. Can be normalized (14 chars) or contain formatting/separators; it will be normalized internally.
   * @returns The formatted CNPJ string when the normalized value has 14 characters; otherwise returns the original input.
   * Returns empty string when input is null or whitespace.
   */
  public static formatWithMask(cnpj: string | null | undefined): string {
    if (!cnpj || cnpj.trim().length === 0) {
      return '';
    }

    const normalized = CnpjNormalizer.normalize(cnpj);
    if (normalized.length !== CnpjFormatter.EXPECTED_LENGTH) {
      return cnpj;
    }

    return `${normalized.substring(0, 2)}.${normalized.substring(2, 5)}.${normalized.substring(5, 8)}/${normalized.substring(8, 12)}-${normalized.substring(12, 14)}`;
  }

  /**
   * Tries to format a CNPJ with the standard Brazilian mask: XX.XXX.XXX/XXXX-XX.
   * @param cnpj - The CNPJ string. Can be normalized (14 chars) or contain formatting/separators; it will be normalized internally.
   * @returns An object with `success: boolean` and `formatted: string`.
   * When successful, `formatted` contains the formatted CNPJ.
   * When not successful, `formatted` contains empty string if input is null/whitespace, otherwise the original input.
   */
  public static tryFormatWithMask(cnpj: string | null | undefined): {
    success: boolean;
    formatted: string;
  } {
    if (!cnpj || cnpj.trim().length === 0) {
      return { success: false, formatted: '' };
    }

    const normalized = CnpjNormalizer.normalize(cnpj);
    if (normalized.length !== CnpjFormatter.EXPECTED_LENGTH) {
      return { success: false, formatted: cnpj };
    }

    const formatted = `${normalized.substring(0, 2)}.${normalized.substring(2, 5)}.${normalized.substring(5, 8)}/${normalized.substring(8, 12)}-${normalized.substring(12, 14)}`;
    return { success: true, formatted };
  }
}
