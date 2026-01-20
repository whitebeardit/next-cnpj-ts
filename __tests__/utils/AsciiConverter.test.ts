import { AsciiConverter } from '../../src/utils/AsciiConverter';

describe('AsciiConverterTests', () => {
  test('ToNumericValue_NumericCharacters_ReturnsCorrectValue', () => {
    // Arrange & Act & Assert
    expect(AsciiConverter.toNumericValue('0')).toBe(0);
    expect(AsciiConverter.toNumericValue('1')).toBe(1);
    expect(AsciiConverter.toNumericValue('9')).toBe(9);
  });

  test('ToNumericValue_LetterA_Returns17', () => {
    // Arrange & Act
    const value = AsciiConverter.toNumericValue('A');

    // Assert
    expect(value).toBe(17); // ASCII 'A' = 65, 65 - 48 = 17
  });

  test('ToNumericValue_LetterB_Returns18', () => {
    // Arrange & Act
    const value = AsciiConverter.toNumericValue('B');

    // Assert
    expect(value).toBe(18); // ASCII 'B' = 66, 66 - 48 = 18
  });

  test('ToNumericValue_LetterC_Returns19', () => {
    // Arrange & Act
    const value = AsciiConverter.toNumericValue('C');

    // Assert
    expect(value).toBe(19); // ASCII 'C' = 67, 67 - 48 = 19
  });

  test('ToNumericValue_LetterD_Returns20', () => {
    // Arrange & Act
    const value = AsciiConverter.toNumericValue('D');

    // Assert
    expect(value).toBe(20); // ASCII 'D' = 68, 68 - 48 = 20
  });

  test('ToNumericValue_LetterE_Returns21', () => {
    // Arrange & Act
    const value = AsciiConverter.toNumericValue('E');

    // Assert
    expect(value).toBe(21); // ASCII 'E' = 69, 69 - 48 = 21
  });
});
