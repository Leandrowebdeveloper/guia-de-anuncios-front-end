import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lnWords',
})
export class LnWordsPipe implements PipeTransform {
  private lastRegex = /[\s][\w\W]{1,3}[\s]*$/g;
  private firstRegex = /\w*\W*$|[\s]?[\w\W]{1,3}[\s]$/g;
  private wordsSize: number;
  private max: number;
  transform(words: string, max = 22): string {
    this.max = max;

    const allWords = this.cropWords(words);

    if (this.wordsSize > this.max) {
      const lastWord = allWords.match(this.firstRegex);

      const response = this.firstFilter(allWords, lastWord);

      if (this.lastRegex.test(response)) {
        return this.lastFilter(response);
      }

      return `${response}...`;
    }
    return allWords;
  }

  private lastFilter(allWords: string) {
    const word = allWords.match(this.lastRegex);
    const regex = new RegExp(word[0]);
    const response = allWords.replace(regex, '');
    return `${response}...`;
  }

  private cropWords(words: string) {
    if (!words) {
      return;
    }
    this.wordsSize = words.length;
    return this.wordsSize > this.max ? words.slice(0, this.max) : words;
  }

  private firstFilter(allWords: string, word: string[]) {
    const regex = new RegExp(word[0]);
    return allWords.replace(regex, '');
  }
}
