import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@codetrix-studio/capacitor-google-auth';

@Pipe({
  name: 'isUsers',
})
export class IsUsersPipe implements PipeTransform {
  transform(value: unknown, limit = 0): boolean {
    const users = value as User[];
    if (users && users?.length > limit) {
      return true;
    }
    return false;
  }
}
