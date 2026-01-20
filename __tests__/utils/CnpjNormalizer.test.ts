import { CnpjNormalizer } from '../../src/utils/CnpjNormalizer';

describe('CnpjNormalizationTests', () => {
  test('Normalize_WithFormatting_RemovesFormatting', () => {
    // Arrange
    const cnpj = '12.ABC.345/01DE-35';

    // Act
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Assert
    expect(normalized).toBe('12ABC34501DE35');
  });

  test('Normalize_WithLowercase_ConvertsToUppercase', () => {
    // Arrange
    const cnpj = '12abc34501de35';

    // Act
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Assert
    expect(normalized).toBe('12ABC34501DE35');
  });

  test('Normalize_WithSpaces_RemovesSpaces', () => {
    // Arrange
    const cnpj = '12 ABC 345 01 DE 35';

    // Act
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Assert
    expect(normalized).toBe('12ABC34501DE35');
  });

  test('Normalize_EmptyString_ReturnsEmpty', () => {
    // Arrange
    const cnpj = '';

    // Act
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Assert
    expect(normalized).toBe('');
  });

  test('Normalize_Null_ReturnsEmpty', () => {
    // Arrange
    const cnpj: string | null = null;

    // Act
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Assert
    expect(normalized).toBe('');
  });

  test('Normalize_OnlyAlphanumeric_KeepsAll', () => {
    // Arrange
    const cnpj = '12ABC34501DE35';

    // Act
    const normalized = CnpjNormalizer.normalize(cnpj);

    // Assert
    expect(normalized).toBe('12ABC34501DE35');
  });
});
