import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interface';

@Pipe({
  name: 'userValuesImgAvatar',
  pure: false,
})
export class UserValuesImgAvatarPipe implements PipeTransform {
  transform(value: unknown): string {
    const user = value as Pick<User, 'image'>;
    if (user && user?.image && user?.image?.filename)
      return `/images/avatar/${user.image.filename}`;
    return './../../../../../../assets/avatar.svg';
  }
}
