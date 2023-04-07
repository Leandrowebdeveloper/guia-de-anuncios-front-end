import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'typePlanFree',
})
export class TypePlanFreePipe implements PipeTransform {
  transform(value: unknown): boolean {
    const announcement = value as Announcement;
    if (
      (announcement && announcement?.user?.plan?.type === 'free') ||
      (announcement?.galery && announcement?.galery.length === 0)
    ) {
      return true;
    }
    return false;
  }
}
