/**
 * Format type for CNPJ.
 * Represents whether the CNPJ is numeric (traditional format) or alphanumeric (new format).
 */
export type CnpjFormat = 'numeric' | 'alphanumeric';

/**
 * Numeric format constant.
 */
export const CNPJ_FORMAT_NUMERIC: CnpjFormat = 'numeric';

/**
 * Alphanumeric format constant.
 */
export const CNPJ_FORMAT_ALPHANUMERIC: CnpjFormat = 'alphanumeric';
