import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  private regex = /^([0-9]{2})([0-9]{3})([0-9]{2,3})([0-9]{2,3})/;
  transform(
    value: unknown,
    args: 'whatsapp' | 'phone' | 'mobilePhone' | 'cep'
  ): string | null {
    if (!value) {
      return;
    }

    if (typeof value === 'string') {
      if (args === 'whatsapp') {
        return value.replace(this.regex, '($1)$2-$3-$4');
      }
      if (args === 'phone') {
        return value.replace(/^([0-9]{2})([0-9]{4})([0-9]{4})/, '($1)$2-$3');
      }
      if (args === 'mobilePhone') {
        return value.replace(this.regex, '($1)$2-$3-$4');
      }
      if (args === 'cep') {
        return value.replace(/^(\d\d)(\d\d\d)(\d\d\d)/, '$1.$2-$3');
      }
      return null;
    } else {
      if (args === 'whatsapp') {
        return String(value).replace(this.regex, '($1)$2-$3-$4');
      }
      if (args === 'phone') {
        return String(value).replace(
          /^([0-9]{2})([0-9]{4})([0-9]{4})/,
          '($1)$2-$3'
        );
      }
      if (args === 'mobilePhone') {
        return String(value).replace(this.regex, '($1)$2-$3-$4');
      }
      if (args === 'cep') {
        return String(value).replace(/^(\d\d)(\d\d\d)(\d\d\d)/, '$1.$2-$3');
      }
      return null;
    }
  }
}
