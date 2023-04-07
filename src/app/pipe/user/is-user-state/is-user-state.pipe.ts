import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interface';

@Pipe({
  name: 'isUserState',
})
export class IsUserStatePipe implements PipeTransform {
  transform(value: unknown): boolean {
    const user = value as Pick<User, 'state'>;
    if (user && user?.state) {
      return true;
    }
    return false;
  }
}
