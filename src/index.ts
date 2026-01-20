// Domain exports
export { CnpjFormat, CNPJ_FORMAT_NUMERIC, CNPJ_FORMAT_ALPHANUMERIC } from './domain/CnpjFormat';
export { CnpjConfiguration } from './domain/CnpjConfiguration';
export { CnpjValidationResult } from './domain/CnpjValidationResult';

// Service exports
export { CnpjValidator } from './services/CnpjValidator';
export { ICnpjValidator } from './services/ICnpjValidator';
export { CnpjFormatIdentifier } from './services/CnpjFormatIdentifier';
export { ICnpjFormatIdentifier } from './services/ICnpjFormatIdentifier';

// Utility exports (if needed for advanced usage)
export { AsciiConverter } from './utils/AsciiConverter';
export { CnpjNormalizer } from './utils/CnpjNormalizer';
export { DigitVerifierCalculator } from './utils/DigitVerifierCalculator';
