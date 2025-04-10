import { describe, expect, it } from 'vitest';
import { capitalizeWords } from '../functions';

describe('functions', () => {
  describe('capitalizeWords', () => {
    it('should capitalize words', () => {
      const mockedWord = 'gRokC bAhmbrok';

      const result = capitalizeWords(mockedWord);

      expect(result).toStrictEqual('Grokc Bahmbrok');
    });
  });
});
