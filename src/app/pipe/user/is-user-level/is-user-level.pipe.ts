import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interface';

@Pipe({
  name: 'isUserLevel',
})
export class IsUserLevelPipe implements PipeTransform {
  transform(value: unknown, level: '1' | '2'): boolean {
    const user = value as Pick<User, 'level'>;
    if (user && user.level === level) {
      return true;
    }
    return false;
  }
}
