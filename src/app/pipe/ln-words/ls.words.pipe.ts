import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lnWords',
})
export class LnWordsPipe implements PipeTransform {
  private lastRegex = /[\s][\w\W]{1,3}[\s]*$/g;
  private firstRegex = /\w*\W*$|[\s]?[\w\W]{1,3}[\s]$/g;
  private wordsSize: number | undefined;
  private max: number | undefined;
  transform(words: unknown, max = 22): string | null | undefined {
    this.max = max;

    const allWords = this.cropWords(words as string);

    if (allWords && this.wordsSize && this.wordsSize > this.max) {
      const lastWord = allWords.match(this.firstRegex);

      const response = lastWord && this.firstFilter(allWords, lastWord);

      if (response && this.lastRegex.test(response)) {
        return this.lastFilter(response);
      }

      return `${response}...`;
    }
    return allWords;
  }

  private lastFilter(allWords: string): string | null {
    const word = allWords.match(this.lastRegex);
    if (word) {
      const regex = new RegExp(word[0]);
      const response = allWords.replace(regex, '');
      return `${response}...`;
    }
    return null;
  }

  private cropWords(words: string) {
    if (!words) {
      return;
    }
    this.wordsSize = words.length;
    return this.max && this.wordsSize > this.max
      ? words.slice(0, this.max)
      : words;
  }

  private firstFilter(allWords: string, word: string[]) {
    const regex = new RegExp(word[0]);
    return allWords.replace(regex, '');
  }
}
