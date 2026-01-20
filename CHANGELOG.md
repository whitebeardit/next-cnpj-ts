# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-19

### Added

- Initial release of next-cnpj TypeScript library
- Numeric CNPJ validation (traditional format)
- Alphanumeric CNPJ validation (new NTC 2025.001 format)
- Automatic check digit calculation and validation
- Automatic normalization (removes formatting: dots, slashes, hyphens)
- Automatic format identification (numeric or alphanumeric)
- Excluded letters configuration (I, O, U, Q, F according to ENCAT)
- Support for CNPJ with or without formatting
- Automatic lowercase to uppercase conversion
- Rejection of CNPJ with all identical characters
- Detailed results with descriptive error messages
- Full TypeScript support with type definitions
- Complete test suite with Jest
- Comprehensive documentation

### Features

- `CnpjValidator` class for CNPJ validation
- `CnpjFormatIdentifier` class for format identification
- `CnpjConfiguration` class for custom validation rules
- `CnpjValidationResult` class for detailed validation results
- Utility classes: `AsciiConverter`, `CnpjNormalizer`, `DigitVerifierCalculator`
- Compatible with Node.js 12+
