import { CnpjFormatter } from '../../src/utils/CnpjFormatter';

describe('CnpjFormatterTests', () => {
  test('FormatWithMask_ValidNumericCnpj_ReturnsFormatted', () => {
    // Arrange
    const normalizedCnpj = '11222333000181';

    // Act
    const result = CnpjFormatter.formatWithMask(normalizedCnpj);

    // Assert
    expect(result).toBe('11.222.333/0001-81');
  });

  test('FormatWithMask_ValidAlphanumericCnpj_ReturnsFormatted', () => {
    // Arrange
    const normalizedCnpj = 'O14U9UHHBNQ434';

    // Act
    const result = CnpjFormatter.formatWithMask(normalizedCnpj);

    // Assert
    expect(result).toBe('O1.4U9.UHH/BNQ4-34');
  });

  test('FormatWithMask_AlreadyFormattedNumericCnpj_ReturnsSameCanonicalFormat', () => {
    // Arrange
    const formatted = '11.222.333/0001-81';

    // Act
    const result = CnpjFormatter.formatWithMask(formatted);

    // Assert
    expect(result).toBe('11.222.333/0001-81');
  });

  test('FormatWithMask_AlreadyFormattedAlphanumericCnpj_ReturnsSameCanonicalFormat', () => {
    // Arrange
    const formatted = 'O1.4U9.UHH/BNQ4-34';

    // Act
    const result = CnpjFormatter.formatWithMask(formatted);

    // Assert
    expect(result).toBe('O1.4U9.UHH/BNQ4-34');
  });

  test('FormatWithMask_WithSeparatorsAndSpaces_NormalizesAndFormats', () => {
    // Arrange
    const withSpaces = '11 222 333 0001 81';

    // Act
    const result = CnpjFormatter.formatWithMask(withSpaces);

    // Assert
    expect(result).toBe('11.222.333/0001-81');
  });

  test('FormatWithMask_AlphanumericLowercase_NormalizesToUppercaseAndFormats', () => {
    // Arrange
    const lowercase = '12abc34501de35';

    // Act
    const result = CnpjFormatter.formatWithMask(lowercase);

    // Assert
    expect(result).toBe('12.ABC.345/01DE-35');
  });

  test('FormatWithMask_InvalidLength_ReturnsOriginal', () => {
    // Arrange
    const invalidCnpj = '123';

    // Act
    const result = CnpjFormatter.formatWithMask(invalidCnpj);

    // Assert
    expect(result).toBe('123');
  });

  test('FormatWithMask_NullOrWhitespace_ReturnsEmpty', () => {
    // Arrange
    const nullCnpj: string | null = null;
    const emptyCnpj = '';
    const whitespaceCnpj = '   ';

    // Act
    const resultNull = CnpjFormatter.formatWithMask(nullCnpj);
    const resultEmpty = CnpjFormatter.formatWithMask(emptyCnpj);
    const resultWhitespace = CnpjFormatter.formatWithMask(whitespaceCnpj);

    // Assert
    expect(resultNull).toBe('');
    expect(resultEmpty).toBe('');
    expect(resultWhitespace).toBe('');
  });

  test('TryFormatWithMask_ValidNumericCnpj_ReturnsSuccessTrue', () => {
    // Arrange
    const normalizedCnpj = '11222333000181';

    // Act
    const result = CnpjFormatter.tryFormatWithMask(normalizedCnpj);

    // Assert
    expect(result.success).toBe(true);
    expect(result.formatted).toBe('11.222.333/0001-81');
  });

  test('TryFormatWithMask_ValidAlphanumericCnpj_ReturnsSuccessTrue', () => {
    // Arrange
    const normalizedCnpj = 'O14U9UHHBNQ434';

    // Act
    const result = CnpjFormatter.tryFormatWithMask(normalizedCnpj);

    // Assert
    expect(result.success).toBe(true);
    expect(result.formatted).toBe('O1.4U9.UHH/BNQ4-34');
  });

  test('TryFormatWithMask_InvalidLength_ReturnsSuccessFalse', () => {
    // Arrange
    const invalidCnpj = '123';

    // Act
    const result = CnpjFormatter.tryFormatWithMask(invalidCnpj);

    // Assert
    expect(result.success).toBe(false);
    expect(result.formatted).toBe('123');
  });

  test('TryFormatWithMask_NullOrWhitespace_ReturnsSuccessFalse', () => {
    // Arrange
    const nullCnpj: string | null = null;
    const emptyCnpj = '';
    const whitespaceCnpj = '   ';

    // Act
    const resultNull = CnpjFormatter.tryFormatWithMask(nullCnpj);
    const resultEmpty = CnpjFormatter.tryFormatWithMask(emptyCnpj);
    const resultWhitespace = CnpjFormatter.tryFormatWithMask(whitespaceCnpj);

    // Assert
    expect(resultNull.success).toBe(false);
    expect(resultNull.formatted).toBe('');
    expect(resultEmpty.success).toBe(false);
    expect(resultEmpty.formatted).toBe('');
    expect(resultWhitespace.success).toBe(false);
    expect(resultWhitespace.formatted).toBe('');
  });
});
