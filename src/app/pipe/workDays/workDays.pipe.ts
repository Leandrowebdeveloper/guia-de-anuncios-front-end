import { Pipe, PipeTransform } from '@angular/core';
import { HelpsService } from 'src/app/utilities/helps/helps.service';

@Pipe({
  name: 'workDays',
})
export class WorkDaysPipe implements PipeTransform {
  transform(workDays: unknown): string | null {
    return HelpsService.showWorkDays(workDays);
  }
}
