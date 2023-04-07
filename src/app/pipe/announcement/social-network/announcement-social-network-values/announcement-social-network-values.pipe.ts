import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, SocialNetwork } from 'src/app/interface';

@Pipe({
  name: 'announcementSocialNetworkValues',
})
export class AnnouncementSocialNetworkValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof SocialNetwork, text?: string): any {
    const announcement = value as Pick<Announcement, 'socialNetwork'>;
    if (
      announcement &&
      announcement?.socialNetwork &&
      announcement?.socialNetwork[attr]
    ) {
      if (attr) return `${text} ${announcement?.socialNetwork[attr]}`;
      return announcement.socialNetwork[attr];
    }
  }
}
