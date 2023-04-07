import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interface';

@Pipe({
  name: 'userValues',
  pure: false,
})
export class UserValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof User, text?: string): any {
    const user = value as User;
    if (user && user[attr]) {
      if (text) return `${text} ${user[attr]}`;
      return user[attr];
    }
  }
}
