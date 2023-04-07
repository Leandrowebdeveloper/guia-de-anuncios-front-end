import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interface';

@Pipe({
  name: 'isUserValues',
  pure: false,
})
export class IsUserValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof User): boolean {
    const user = value as User;
    if (user && user[attr]) {
      return true;
    }
    return false;
  }
}
