/**
 * Configuration for CNPJ validation.
 * Allows customization of excluded letters and validation rules.
 */
export class CnpjConfiguration {
  /**
   * Letters that should not be accepted in alphanumeric CNPJ.
   * Default: I, O, U, Q, F (according to ENCAT technical specification).
   */
  public readonly excludedLetters: readonly string[];

  /**
   * Flag to allow excluded letters even if they are in the list.
   * Default: false (does not allow excluded letters).
   */
  public readonly allowExcludedLetters: boolean;

  /**
   * Creates an instance with default configuration.
   */
  constructor(excludedLetters?: string[], allowExcludedLetters?: boolean) {
    this.excludedLetters = Object.freeze(
      excludedLetters || ['I', 'O', 'U', 'Q', 'F']
    );
    this.allowExcludedLetters = allowExcludedLetters ?? false;
  }

  /**
   * Creates a custom configuration instance.
   * @param excludedLetters - Letters to exclude (default: ['I', 'O', 'U', 'Q', 'F'])
   * @param allowExcludedLetters - Whether to allow excluded letters (default: false)
   */
  public static create(
    excludedLetters: string[] = ['I', 'O', 'U', 'Q', 'F'],
    allowExcludedLetters: boolean = false
  ): CnpjConfiguration {
    return new CnpjConfiguration(excludedLetters, allowExcludedLetters);
  }

  /**
   * Checks if a letter is in the excluded list and not allowed.
   * @param letter - Letter to check.
   * @returns True if the letter is excluded and not allowed.
   */
  public isLetterExcluded(letter: string): boolean {
    if (this.allowExcludedLetters) {
      return false;
    }

    const upperLetter = letter.toUpperCase();
    return this.excludedLetters.includes(upperLetter);
  }
}
