import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interface';

@Pipe({
  name: 'imgAvatar',
})
export class ImgAvatarPipe implements PipeTransform {
  transform(value: unknown): unknown {
    const user = value as User;
    if (user && user?.image?.filename) {
      if (user?.image?.filename.includes('https://')) {
        return user.image.filename;
      }
      return `/images/avatar/${user.image?.filename}`;
    }
    return '../../../../../assets/avatar.svg';
  }
}
