import { AsciiConverter } from '../../src/utils/AsciiConverter';

describe('AsciiConverterTests', () => {
  describe('toNumericValue - Numeric Characters (0-9)', () => {
    test('ToNumericValue_Zero_ReturnsZero', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('0');

      // Assert
      expect(value).toBe(0); // ASCII '0' = 48, 48 - 48 = 0
    });

    test('ToNumericValue_One_ReturnsOne', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('1');

      // Assert
      expect(value).toBe(1); // ASCII '1' = 49, 49 - 48 = 1
    });

    test('ToNumericValue_Two_ReturnsTwo', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('2');

      // Assert
      expect(value).toBe(2); // ASCII '2' = 50, 50 - 48 = 2
    });

    test('ToNumericValue_Three_ReturnsThree', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('3');

      // Assert
      expect(value).toBe(3); // ASCII '3' = 51, 51 - 48 = 3
    });

    test('ToNumericValue_Four_ReturnsFour', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('4');

      // Assert
      expect(value).toBe(4); // ASCII '4' = 52, 52 - 48 = 4
    });

    test('ToNumericValue_Five_ReturnsFive', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('5');

      // Assert
      expect(value).toBe(5); // ASCII '5' = 53, 53 - 48 = 5
    });

    test('ToNumericValue_Six_ReturnsSix', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('6');

      // Assert
      expect(value).toBe(6); // ASCII '6' = 54, 54 - 48 = 6
    });

    test('ToNumericValue_Seven_ReturnsSeven', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('7');

      // Assert
      expect(value).toBe(7); // ASCII '7' = 55, 55 - 48 = 7
    });

    test('ToNumericValue_Eight_ReturnsEight', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('8');

      // Assert
      expect(value).toBe(8); // ASCII '8' = 56, 56 - 48 = 8
    });

    test('ToNumericValue_Nine_ReturnsNine', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('9');

      // Assert
      expect(value).toBe(9); // ASCII '9' = 57, 57 - 48 = 9
    });

    test('ToNumericValue_AllNumericCharacters_ReturnsCorrectValues', () => {
      // Arrange & Act & Assert - Test all digits in one test
      for (let i = 0; i <= 9; i++) {
        const digit = i.toString();
        const value = AsciiConverter.toNumericValue(digit);
        expect(value).toBe(i);
      }
    });
  });

  describe('toNumericValue - Uppercase Letters (A-Z)', () => {
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

    test('ToNumericValue_LetterF_Returns22', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('F');

      // Assert
      expect(value).toBe(22); // ASCII 'F' = 70, 70 - 48 = 22
    });

    test('ToNumericValue_LetterG_Returns23', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('G');

      // Assert
      expect(value).toBe(23); // ASCII 'G' = 71, 71 - 48 = 23
    });

    test('ToNumericValue_LetterH_Returns24', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('H');

      // Assert
      expect(value).toBe(24); // ASCII 'H' = 72, 72 - 48 = 24
    });

    test('ToNumericValue_LetterI_Returns25', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('I');

      // Assert
      expect(value).toBe(25); // ASCII 'I' = 73, 73 - 48 = 25
    });

    test('ToNumericValue_LetterJ_Returns26', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('J');

      // Assert
      expect(value).toBe(26); // ASCII 'J' = 74, 74 - 48 = 26
    });

    test('ToNumericValue_LetterK_Returns27', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('K');

      // Assert
      expect(value).toBe(27); // ASCII 'K' = 75, 75 - 48 = 27
    });

    test('ToNumericValue_LetterL_Returns28', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('L');

      // Assert
      expect(value).toBe(28); // ASCII 'L' = 76, 76 - 48 = 28
    });

    test('ToNumericValue_LetterM_Returns29', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('M');

      // Assert
      expect(value).toBe(29); // ASCII 'M' = 77, 77 - 48 = 29
    });

    test('ToNumericValue_LetterN_Returns30', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('N');

      // Assert
      expect(value).toBe(30); // ASCII 'N' = 78, 78 - 48 = 30
    });

    test('ToNumericValue_LetterO_Returns31', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('O');

      // Assert
      expect(value).toBe(31); // ASCII 'O' = 79, 79 - 48 = 31
    });

    test('ToNumericValue_LetterP_Returns32', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('P');

      // Assert
      expect(value).toBe(32); // ASCII 'P' = 80, 80 - 48 = 32
    });

    test('ToNumericValue_LetterQ_Returns33', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('Q');

      // Assert
      expect(value).toBe(33); // ASCII 'Q' = 81, 81 - 48 = 33
    });

    test('ToNumericValue_LetterR_Returns34', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('R');

      // Assert
      expect(value).toBe(34); // ASCII 'R' = 82, 82 - 48 = 34
    });

    test('ToNumericValue_LetterS_Returns35', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('S');

      // Assert
      expect(value).toBe(35); // ASCII 'S' = 83, 83 - 48 = 35
    });

    test('ToNumericValue_LetterT_Returns36', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('T');

      // Assert
      expect(value).toBe(36); // ASCII 'T' = 84, 84 - 48 = 36
    });

    test('ToNumericValue_LetterU_Returns37', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('U');

      // Assert
      expect(value).toBe(37); // ASCII 'U' = 85, 85 - 48 = 37
    });

    test('ToNumericValue_LetterV_Returns38', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('V');

      // Assert
      expect(value).toBe(38); // ASCII 'V' = 86, 86 - 48 = 38
    });

    test('ToNumericValue_LetterW_Returns39', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('W');

      // Assert
      expect(value).toBe(39); // ASCII 'W' = 87, 87 - 48 = 39
    });

    test('ToNumericValue_LetterX_Returns40', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('X');

      // Assert
      expect(value).toBe(40); // ASCII 'X' = 88, 88 - 48 = 40
    });

    test('ToNumericValue_LetterY_Returns41', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('Y');

      // Assert
      expect(value).toBe(41); // ASCII 'Y' = 89, 89 - 48 = 41
    });

    test('ToNumericValue_LetterZ_Returns42', () => {
      // Arrange & Act
      const value = AsciiConverter.toNumericValue('Z');

      // Assert
      expect(value).toBe(42); // ASCII 'Z' = 90, 90 - 48 = 42
    });

    test('ToNumericValue_AllUppercaseLetters_ReturnsCorrectValues', () => {
      // Arrange & Act & Assert - Test all letters A-Z in one test
      for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i); // A-Z
        const expectedValue = 17 + i; // A=17, B=18, ..., Z=42
        const value = AsciiConverter.toNumericValue(letter);
        expect(value).toBe(expectedValue);
      }
    });
  });

  describe('toNumericValue - Error Cases', () => {
    test('ToNumericValue_EmptyString_ThrowsError', () => {
      // Arrange
      const emptyString = '';

      // Act & Assert
      expect(() => {
        AsciiConverter.toNumericValue(emptyString);
      }).toThrow('Character must be a single character string');
    });

    test('ToNumericValue_MultipleCharacters_ThrowsError', () => {
      // Arrange
      const multipleChars = 'AB';

      // Act & Assert
      expect(() => {
        AsciiConverter.toNumericValue(multipleChars);
      }).toThrow('Character must be a single character string');
    });

    test('ToNumericValue_ThreeCharacters_ThrowsError', () => {
      // Arrange
      const threeChars = 'ABC';

      // Act & Assert
      expect(() => {
        AsciiConverter.toNumericValue(threeChars);
      }).toThrow('Character must be a single character string');
    });

    test('ToNumericValue_LongString_ThrowsError', () => {
      // Arrange
      const longString = '1234567890';

      // Act & Assert
      expect(() => {
        AsciiConverter.toNumericValue(longString);
      }).toThrow('Character must be a single character string');
    });
  });

  describe('toNumericValue - Integration with Known Cases', () => {
    test('ToNumericValue_ConfluenceExample_12ABC34501DE_ValidatesCorrectly', () => {
      // Arrange - Exemplo do Confluence: 12ABC34501DE
      const cnpjBase = '12ABC34501DE';
      const expectedValues = [1, 2, 17, 18, 19, 3, 4, 5, 0, 1, 20, 21];

      // Act & Assert - Verificar cada caractere usando a variável
      for (let i = 0; i < cnpjBase.length; i++) {
        const character = cnpjBase[i];
        const value = AsciiConverter.toNumericValue(character);
        expect(value).toBe(expectedValues[i]);
      }
    });

    test('ToNumericValue_AllCharactersFromConfluenceExample_ReturnsExpectedValues', () => {
      // Arrange - Exemplo completo do Confluence: 12ABC34501DE35
      const cnpj = '12ABC34501DE35';
      const expectedValues = [
        1, 2, 17, 18, 19, 3, 4, 5, 0, 1, 20, 21, 3, 5
      ];

      // Act & Assert
      for (let i = 0; i < cnpj.length; i++) {
        const character = cnpj[i];
        const value = AsciiConverter.toNumericValue(character);
        expect(value).toBe(expectedValues[i]);
      }
    });

    test('ToNumericValue_NumericCnpj_AllDigitsReturnCorrectValues', () => {
      // Arrange - CNPJ numérico válido: 11222333000181
      const cnpj = '11222333000181';
      const expectedValues = [1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 0, 1, 8, 1];

      // Act & Assert
      for (let i = 0; i < cnpj.length; i++) {
        const character = cnpj[i];
        const value = AsciiConverter.toNumericValue(character);
        expect(value).toBe(expectedValues[i]);
      }
    });
  });
});
