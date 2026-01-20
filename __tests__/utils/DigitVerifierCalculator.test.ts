import { DigitVerifierCalculator } from '../../src/utils/DigitVerifierCalculator';

describe('DigitVerifierCalculationTests', () => {
  test('CalculateFirstDigit_ConfluenceExample_ReturnsCorrectValue', () => {
    // Arrange - Exemplo do Confluence: 12ABC34501DE
    // Primeiro DV deve ser 3
    const cnpjBase = '12ABC34501DE';

    // Act
    const firstDigit = DigitVerifierCalculator.calculateFirstDigit(cnpjBase);

    // Assert
    expect(firstDigit).toBe(3);
  });

  test('CalculateSecondDigit_ConfluenceExample_ReturnsCorrectValue', () => {
    // Arrange - Exemplo do Confluence: 12ABC34501DE com primeiro DV = 3
    // Segundo DV deve ser 5
    const cnpjBase = '12ABC34501DE';
    const firstDigit = 3;

    // Act
    const secondDigit = DigitVerifierCalculator.calculateSecondDigit(cnpjBase, firstDigit);

    // Assert
    expect(secondDigit).toBe(5);
  });

  test('ValidateDigits_ConfluenceExample_ReturnsTrue', () => {
    // Arrange - Exemplo completo do Confluence: 12ABC34501DE35
    const cnpj = '12ABC34501DE35';

    // Act
    const isValid = DigitVerifierCalculator.validateDigits(cnpj);

    // Assert
    expect(isValid).toBe(true);
  });

  test('ValidateDigits_ValidNumericCnpj_ReturnsTrue', () => {
    // Arrange
    const cnpj = '11222333000181';

    // Act
    const isValid = DigitVerifierCalculator.validateDigits(cnpj);

    // Assert
    expect(isValid).toBe(true);
  });

  test('ValidateDigits_InvalidCnpj_ReturnsFalse', () => {
    // Arrange
    const cnpj = '11222333000182'; // DV incorreto

    // Act
    const isValid = DigitVerifierCalculator.validateDigits(cnpj);

    // Assert
    expect(isValid).toBe(false);
  });

  test('CalculateFirstDigit_NumericCnpj_CompatibleWithOldFormat', () => {
    // Arrange - CNPJ numérico válido
    const cnpjBase = '112223330001';

    // Act
    const firstDigit = DigitVerifierCalculator.calculateFirstDigit(cnpjBase);

    // Assert
    expect(firstDigit).toBe(8);
  });

  test('CalculateSecondDigit_NumericCnpj_CompatibleWithOldFormat', () => {
    // Arrange
    const cnpjBase = '112223330001';
    const firstDigit = 8;

    // Act
    const secondDigit = DigitVerifierCalculator.calculateSecondDigit(cnpjBase, firstDigit);

    // Assert
    expect(secondDigit).toBe(1);
  });
});
