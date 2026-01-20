import { CnpjFormatIdentifier } from '../../src/services/CnpjFormatIdentifier';
import { CNPJ_FORMAT_NUMERIC, CNPJ_FORMAT_ALPHANUMERIC } from '../../src/domain/CnpjFormat';

describe('CnpjFormatIdentificationTests', () => {
  let identifier: CnpjFormatIdentifier;

  beforeEach(() => {
    identifier = new CnpjFormatIdentifier();
  });

  test('IdentifyFormat_NumericCnpj_ReturnsNumeric', () => {
    // Arrange
    const cnpj = '11222333000181';

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_NUMERIC);
  });

  test('IdentifyFormat_AlphanumericCnpj_ReturnsAlphanumeric', () => {
    // Arrange
    const cnpj = '12ABC34501DE35';

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_ALPHANUMERIC);
  });

  test('IdentifyFormat_AlphanumericCnpj_WithLettersInRoot_ReturnsAlphanumeric', () => {
    // Arrange - Letras na raiz
    const cnpj = '12ABC345000135';

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_ALPHANUMERIC);
  });

  test('IdentifyFormat_AlphanumericCnpj_WithLettersInOrder_ReturnsAlphanumeric', () => {
    // Arrange - Letras na ordem
    const cnpj = '12345678ABCD35';

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_ALPHANUMERIC);
  });

  test('IdentifyFormat_AlphanumericCnpj_WithFormatting_ReturnsAlphanumeric', () => {
    // Arrange
    const cnpj = '12.ABC.345/01DE-35';

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_ALPHANUMERIC);
  });

  test('IsAlphanumeric_NumericCnpj_ReturnsFalse', () => {
    // Arrange
    const cnpj = '11222333000181';

    // Act
    const isAlphanumeric = identifier.isAlphanumeric(cnpj);

    // Assert
    expect(isAlphanumeric).toBe(false);
  });

  test('IsAlphanumeric_AlphanumericCnpj_ReturnsTrue', () => {
    // Arrange
    const cnpj = '12ABC34501DE35';

    // Act
    const isAlphanumeric = identifier.isAlphanumeric(cnpj);

    // Assert
    expect(isAlphanumeric).toBe(true);
  });

  test('IsNumeric_NumericCnpj_ReturnsTrue', () => {
    // Arrange
    const cnpj = '11222333000181';

    // Act
    const isNumeric = identifier.isNumeric(cnpj);

    // Assert
    expect(isNumeric).toBe(true);
  });

  test('IsNumeric_AlphanumericCnpj_ReturnsFalse', () => {
    // Arrange
    const cnpj = '12ABC34501DE35';

    // Act
    const isNumeric = identifier.isNumeric(cnpj);

    // Assert
    expect(isNumeric).toBe(false);
  });

  test('IdentifyFormat_EmptyString_ReturnsNumeric', () => {
    // Arrange
    const cnpj = '';

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_NUMERIC);
  });

  test('IdentifyFormat_Null_ReturnsNumeric', () => {
    // Arrange
    const cnpj: string | null = null;

    // Act
    const format = identifier.identifyFormat(cnpj);

    // Assert
    expect(format).toBe(CNPJ_FORMAT_NUMERIC);
  });
});
