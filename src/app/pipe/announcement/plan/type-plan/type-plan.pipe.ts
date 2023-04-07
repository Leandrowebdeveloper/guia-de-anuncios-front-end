import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'typePlan',
})
export class TypePlanPipe implements PipeTransform {
  transform(value: unknown): boolean {
    const announcement = value as Pick<Announcement, 'user' | 'galery'>;
    if (
      announcement &&
      announcement?.user?.plan?.type !== 'free' &&
      announcement?.galery &&
      announcement?.galery?.length > 0
    ) {
      return true;
    }
    return false;
  }
}
