import { Pipe, PipeTransform } from '@angular/core';
import { Plan, User } from 'src/app/interface';

@Pipe({
  name: 'userValuesPlan',
  pure: false,
})
export class UserValuesPlanPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Plan): any {
    const user = value as User;
    if (user && user?.plan && user?.plan[attr]) {
      return user?.plan[attr];
    }
  }
}
