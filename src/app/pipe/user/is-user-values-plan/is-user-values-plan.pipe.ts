import { Pipe, PipeTransform } from '@angular/core';
import { Plan, User } from 'src/app/interface';

@Pipe({
  name: 'isUserValuesPlan',
  pure: false,
})
export class IsUserValuesPlanPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Plan): boolean {
    const user = value as User;
    if (user && user?.plan && user?.plan[attr]) {
      return true;
    }
    return false;
  }
}
