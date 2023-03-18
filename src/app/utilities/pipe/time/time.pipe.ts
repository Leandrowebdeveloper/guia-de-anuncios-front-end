import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(
    value: string,
    data = 'create' || 'update' || 'plan' || 'workDays'
  ): unknown {
    if (this.isTimestamp(value)) {
      const minutes = moment().diff(value, 'minutes'); //minutos
      const hours = moment().diff(value, 'hours'); //horas
      const days = moment().diff(value, 'days'); // dias
      const month = moment().diff(value, 'months'); // meses
      const year = moment().diff(value, 'years'); // anos

      switch (data) {
        case 'create':
          if (minutes <= 60) {
            return `Criado há ${minutes} minuto${this.pluralMinutes(minutes)}.`;
          }
          if (hours <= 24) {
            return `Criado há ${hours} hora${this.pluralHours(hours)}.`;
          }
          if (days >= 1) {
            return `Criado há ${days} dia${this.pluralDays(days)}.`;
          }
          if (month < 60) {
            return `Criado há ${month} mese${this.pluralMonth(month)}.`;
          }
          if (year > 0) {
            return `Criado há ${year} ano${this.pluralYear(year)}.`;
          }
          break;
        case 'update':
          if (minutes <= 60) {
            return `Atualizado há ${minutes} minuto${this.pluralMinutes(
              minutes
            )}.`;
          }
          if (hours <= 24) {
            return `Atualizado há ${hours} hora${this.pluralHours(hours)}.`;
          }
          if (days >= 1) {
            return `Atualizado há ${days} dia${this.pluralDays(days)}.`;
          }
          if (month < 60) {
            return `Atualizado há ${month} mese${this.pluralMonth(month)}.`;
          }
          if (year > 0) {
            return `Atualizado há ${year} ano${this.pluralYear(year)}.`;
          }
          break;
        case 'plan':
          return `Restão ${Math.abs(days)} dia${this.pluralDays(
            days
          )} para o vencimento.`;
        case 'workDays':
          const moments = moment().format('LLLL');
          const d = moments.slice(0, 1);
          return moments.replace(d, d.toUpperCase());
      }
    }
  }

  private pluralYear(year: number): string | '' {
    return year > 1 ? 's' : '';
  }

  private pluralMonth(month: number): string | '' {
    return month > 60 ? 's' : '';
  }

  private pluralDays(days: number): string | '' {
    return days > 1 ? 's' : '';
  }

  private pluralHours(hours: number): string | '' {
    return hours > 24 ? 's' : '';
  }

  private pluralMinutes(minutes: number): string | '' {
    return minutes > 1 ? 's' : '';
  }

  private isTimestamp(value: string): boolean {
    return new Date(value).getTime() > 0;
  }
}
