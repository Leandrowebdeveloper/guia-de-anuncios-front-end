import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isSocialNetworks',
})
export class IsSocialNetworksPipe implements PipeTransform {
  transform(value: unknown): boolean {
    const users = value as Pick<Announcement, 'socialNetwork'>;
    if (users && users?.socialNetwork) {
      return true;
    }
    return false;
  }
}
