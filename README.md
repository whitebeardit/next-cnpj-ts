<a href="https://www.buymeacoffee.com/almerindo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

# next-cnpj

Node.js library for robust CNPJ validation with support for the new alphanumeric format according to NTC 2025.001.

## 📋 About

The **next-cnpj** library provides complete CNPJ (Cadastro Nacional da Pessoa Jurídica) validation, including support for the new alphanumeric format that will come into effect. It implements all NTC 2025.001 rules, including calculation and validation of check digits, automatic normalization, and format identification.

## ✨ Features

- ✅ Numeric CNPJ validation (traditional format)
- ✅ Alphanumeric CNPJ validation (new NTC 2025.001 format)
- ✅ Automatic check digit calculation and validation
- ✅ Automatic normalization (removes formatting: dots, slashes, hyphens)
- ✅ Automatic format identification (numeric or alphanumeric)
- ✅ Excluded letters configuration (I, O, U, Q, F according to ENCAT)
- ✅ Support for CNPJ with or without formatting
- ✅ Automatic lowercase to uppercase conversion
- ✅ Rejection of CNPJ with all identical characters (e.g., 00000000000000)
- ✅ Detailed results with descriptive error messages
- ✅ TypeScript support with full type definitions
- ✅ Compatible with Node.js 12+

## 🚀 Installation

Install the package via npm:

```bash
npm install next-cnpj
```

Or via yarn:

```bash
yarn add next-cnpj
```

## 📖 Basic Usage

### Simple Validation

```typescript
import { CnpjValidator } from 'next-cnpj';

const validator = new CnpjValidator();

// Simple validation - returns true/false
const isValid = validator.isValid('11222333000181');
console.log(`Valid CNPJ: ${isValid}`); // true
```

### Detailed Validation

```typescript
import { CnpjValidator } from 'next-cnpj';

const validator = new CnpjValidator();

// Detailed validation - returns complete information
const result = validator.validate('11222333000181');

if (result.isValid) {
  console.log('Valid CNPJ!');
  console.log(`Format: ${result.format}`); // numeric
  console.log(`Normalized CNPJ: ${result.normalizedCnpj}`); // 11222333000181
} else {
  console.log(`Error: ${result.errorMessage}`);
}
```

### Validation with Formatting

The library accepts CNPJ with or without formatting:

```typescript
const validator = new CnpjValidator();

// All these forms are accepted:
validator.isValid('11222333000181');           // Without formatting
validator.isValid('11.222.333/0001-81');      // With traditional formatting
validator.isValid('12.ABC.345/01DE-35');      // Alphanumeric format with formatting
```

## 🔤 Alphanumeric CNPJ

### Alphanumeric CNPJ Validation

The new alphanumeric format allows letters in the root (positions 1-8) or in the order (positions 9-12):

```typescript
const validator = new CnpjValidator();

// Example of valid alphanumeric CNPJ
const result = validator.validate('12ABC34501DE35');

if (result.isValid) {
  console.log(`Format: ${result.format}`); // alphanumeric
  console.log(`Normalized CNPJ: ${result.normalizedCnpj}`); // 12ABC34501DE35
}
```

### Excluded Letters

By default, the letters I, O, U, Q, F are excluded according to ENCAT technical specification:

```typescript
const validator = new CnpjValidator();

// CNPJ with excluded letter (I) - invalid
const result = validator.validate('12IBC34501DE35');
console.log(result.isValid); // false
console.log(result.errorMessage); // "O segmento raiz contém a letra 'I' que não é permitida. Letras excluídas: I, O, U, Q, F."
```

### Custom Configuration

You can customize excluded letters or allow all letters:

```typescript
import { CnpjValidator, CnpjConfiguration } from 'next-cnpj';

const config = CnpjConfiguration.create(
  ['I', 'O'], // Only I and O excluded
  false
);

const validator = new CnpjValidator();
const result = validator.validate('12IBC34501DE35', config);
```

To allow all letters (including normally excluded ones):

```typescript
const config = CnpjConfiguration.create(
  ['I', 'O', 'U', 'Q', 'F'],
  true // Allows all letters
);

const result = validator.validate('12IBC34501DE35', config);
```

### Invalid CNPJ Patterns

The library rejects CNPJs with all identical characters (including all zeros):

```typescript
const validator = new CnpjValidator();

// CNPJ with all zeros - invalid
const result = validator.validate('00000000000000');
console.log(result.isValid); // false
console.log(result.errorMessage); // "CNPJ inválido: todos os caracteres são iguais."

// CNPJ with all same digits - invalid
const result2 = validator.validate('11111111111111');
console.log(result2.isValid); // false
console.log(result2.errorMessage); // "CNPJ inválido: todos os caracteres são iguais."
```

## 🔍 Format Identification

You can identify the CNPJ format before validating:

```typescript
import { CnpjFormatIdentifier } from 'next-cnpj';

const identifier = new CnpjFormatIdentifier();

// Identify format
const format = identifier.identifyFormat('12ABC34501DE35');
console.log(format); // alphanumeric

// Quick checks
const isAlphanumeric = identifier.isAlphanumeric('12ABC34501DE35'); // true
const isNumeric = identifier.isNumeric('11222333000181'); // true
```

## 📚 API Reference

### `CnpjValidator`

Main class for CNPJ validation.

#### Methods

- `validate(cnpj: string | null | undefined, config?: CnpjConfiguration | null): CnpjValidationResult`
  - Validates a CNPJ and returns a `CnpjValidationResult` object with detailed information.

- `isValid(cnpj: string | null | undefined, config?: CnpjConfiguration | null): boolean`
  - Validates a CNPJ and returns `true` if valid, `false` otherwise.

### `CnpjValidationResult`

Validation result with the following properties:

- `isValid: boolean` - Indicates if the CNPJ is valid
- `format: CnpjFormat` - Identified format ('numeric' or 'alphanumeric')
- `errorMessage: string | null` - Error message (null if valid)
- `normalizedCnpj: string` - Normalized CNPJ (without formatting)

### `CnpjFormatIdentifier`

Class for CNPJ format identification.

#### Methods

- `identifyFormat(cnpj: string | null | undefined): CnpjFormat` - Identifies the CNPJ format
- `isAlphanumeric(cnpj: string | null | undefined): boolean` - Checks if it is alphanumeric
- `isNumeric(cnpj: string | null | undefined): boolean` - Checks if it is numeric

### `CnpjConfiguration`

Configuration for custom validation.

#### Properties

- `excludedLetters: readonly string[]` - Letters that should not be accepted (default: ['I', 'O', 'U', 'Q', 'F'])
- `allowExcludedLetters: boolean` - Allows excluded letters even if they are in the list (default: false)

#### Methods

- `static create(excludedLetters?: string[], allowExcludedLetters?: boolean): CnpjConfiguration` - Creates a custom configuration

### `CnpjFormat`

Type representing CNPJ format: `'numeric' | 'alphanumeric'`

## 💡 Use Cases

### 1. Web Form Validation

```typescript
import { CnpjValidator } from 'next-cnpj';

class CnpjValidationService {
  private validator: CnpjValidator;

  constructor() {
    this.validator = new CnpjValidator();
  }

  validateUserInput(cnpj: string) {
    const result = this.validator.validate(cnpj);
    
    if (!result.isValid) {
      return {
        isValid: false,
        errorMessage: result.errorMessage
      };
    }

    return {
      isValid: true,
      normalizedCnpj: result.normalizedCnpj,
      format: result.format
    };
  }
}
```

### 2. Batch Processing

```typescript
import { CnpjValidator } from 'next-cnpj';

function validateBatch(cnpjList: string[]) {
  const validator = new CnpjValidator();
  const results = [];

  for (const cnpj of cnpjList) {
    const result = validator.validate(cnpj);
    results.push(result);
    
    if (result.isValid) {
      console.log(`✓ ${cnpj} - ${result.format}`);
    } else {
      console.log(`✗ ${cnpj} - ${result.errorMessage}`);
    }
  }

  return results;
}
```

### 3. API Integration

```typescript
import { CnpjValidator } from 'next-cnpj';
import express from 'express';

const app = express();
const validator = new CnpjValidator();

app.post('/validate', (req, res) => {
  const { cnpj } = req.body;
  const result = validator.validate(cnpj);

  if (result.isValid) {
    return res.json({
      isValid: true,
      format: result.format,
      normalizedCnpj: result.normalizedCnpj
    });
  }

  return res.status(400).json({
    isValid: false,
    error: result.errorMessage
  });
});
```

### 4. Normalization for Storage

```typescript
import { CnpjValidator } from 'next-cnpj';

function normalizeCnpjForStorage(cnpj: string): string {
  const validator = new CnpjValidator();
  const result = validator.validate(cnpj);
  
  if (result.isValid) {
    // Always store normalized (without formatting)
    return result.normalizedCnpj;
  }
  
  throw new Error(`Invalid CNPJ: ${result.errorMessage}`);
}
```

## 🧪 Testing

The library includes a complete test suite. To run:

```bash
npm test
```

Or with coverage:

```bash
npm run test:coverage
```

Tests cover:
- Numeric CNPJ validation (traditional format)
- Alphanumeric CNPJ validation (new format)
- Check digit calculation
- Format identification
- Normalization
- Error handling (including rejection of all zeros and identical characters)
- Custom configurations

## 📦 Library Structure

```
next-cnpj/
└── src/
    ├── domain/
    │   ├── CnpjFormat.ts              # Format type
    │   ├── CnpjConfiguration.ts       # Validation configuration
    │   └── CnpjValidationResult.ts    # Validation result
    ├── services/
    │   ├── CnpjValidator.ts           # Validator implementation
    │   ├── ICnpjValidator.ts          # Validator interface
    │   ├── CnpjFormatIdentifier.ts    # Format identifier
    │   └── ICnpjFormatIdentifier.ts  # Format identifier interface
    └── utils/
        ├── AsciiConverter.ts          # ASCII conversion for calculation
        ├── CnpjNormalizer.ts          # CNPJ normalization
        └── DigitVerifierCalculator.ts # Check digit calculation
```

## 🔗 References

- NTC 2025.001 - Technical specification for the new CNPJ format
- ENCAT - Excluded letters specification

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request.
