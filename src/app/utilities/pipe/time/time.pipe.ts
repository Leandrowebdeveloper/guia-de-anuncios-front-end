import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
// import 'moment/locale/pt-br';

@Pipe({
    name: 'time',
})
export class TimePipe implements PipeTransform {
    transform(value: string, data = 'create' || 'update'): unknown {
        if (this.isTimestamp(value)) {
            const minutes = moment().diff(value, 'minutes'); //minutos
            const hours = moment().diff(value, 'hours'); //horas
            const days = moment().diff(value, 'days'); // dias
            const month = moment().diff(value, 'months'); // meses
            const year = moment().diff(value, 'years'); // anos
            // console.log(
            //     'Horas : ' + hours,
            //     '\nDias : ' + days,
            //     '\nMes : ' + month,
            //     '\nAnos : ' + year
            // );

            switch (data) {
                case 'create':
                    if (minutes <= 60) {
                        return `Criado à ${minutes} minuto${this.pluralMinutes(
                            minutes
                        )}.`;
                    }
                    if (hours <= 24) {
                        return `Criado à ${hours} hora${this.pluralHours(
                            hours
                        )}.`;
                    }
                    if (days >= 1) {
                        return `Criado à ${days} dia${this.pluralDays(days)}.`;
                    }
                    if (month < 60) {
                        return `Criado à ${month} mese${this.pluralMonth(
                            month
                        )}.`;
                    }
                    if (year > 0) {
                        return `Criado à ${year} ano${this.pluralYear(year)}.`;
                    }
                    break;
                case 'update':
                    if (minutes <= 60) {
                        return `Atualizado à ${minutes} minuto${this.pluralMinutes(
                            minutes
                        )}.`;
                    }
                    if (hours <= 24) {
                        return `Atualizado à ${hours} hora${this.pluralHours(
                            hours
                        )}.`;
                    }
                    if (days >= 1) {
                        return `Atualizado à ${days} dia${this.pluralDays(
                            days
                        )}.`;
                    }
                    if (month < 60) {
                        return `Atualizado à ${month} mese${this.pluralMonth(
                            month
                        )}.`;
                    }
                    if (year > 0) {
                        return `Atualizado à ${year} ano${this.pluralYear(
                            year
                        )}.`;
                    }
                    break;
                default:
                    return null;
            }
        }
        return null;
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
