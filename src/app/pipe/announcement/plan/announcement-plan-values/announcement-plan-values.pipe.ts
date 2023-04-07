import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, Plan } from 'src/app/interface';

@Pipe({
  name: 'announcementPlanValues',
  pure: false,
})
export class AnnouncementPlanValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Plan, text?: string): any {
    const announcement = value as Pick<Announcement, 'plan'>;

    if (announcement && announcement?.plan && announcement?.plan[attr]) {
      // if (attr) return `${text} ${announcement?.plan[attr]}`;
      return announcement.plan[attr];
    }
  }
}
