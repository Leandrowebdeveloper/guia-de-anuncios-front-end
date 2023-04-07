import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Address, WorkDays, WorkDaysFields } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class HelpsService {
  public static contactMask(
    value: unknown,
    _args: unknown
  ): string | null | void {
    const regex = /^([0-9]{2})([0-9]{3})([0-9]{2,3})([0-9]{2,3})/;
    const args = _args as 'whatsapp' | 'phone' | 'mobilePhone' | 'cep';
    if (value) {
      if (typeof value === 'string') {
        if (args === 'whatsapp') {
          return value.replace(regex, '($1)$2-$3-$4');
        }
        if (args === 'phone') {
          return value.replace(/^([0-9]{2})([0-9]{4})([0-9]{4})/, '($1)$2-$3');
        }
        if (args === 'mobilePhone') {
          return value.replace(regex, '($1)$2-$3-$4');
        }
        if (args === 'cep') {
          return value.replace(/^(\d\d)(\d\d\d)(\d\d\d)/, '$1.$2-$3');
        }
        return null;
      } else {
        if (args === 'whatsapp') {
          return String(value).replace(regex, '($1)$2-$3-$4');
        }
        if (args === 'phone') {
          return String(value).replace(
            /^([0-9]{2})([0-9]{4})([0-9]{4})/,
            '($1)$2-$3'
          );
        }
        if (args === 'mobilePhone') {
          return String(value).replace(regex, '($1)$2-$3-$4');
        }
        if (args === 'cep') {
          return String(value).replace(/^(\d\d)(\d\d\d)(\d\d\d)/, '$1.$2-$3');
        }
        return null;
      }
    }
  }

  public static mask(
    address: Required<Pick<Address, 'zip_code'>>
  ): string | null {
    if (typeof address.zip_code === 'number') {
      return String(address.zip_code).replace(
        /^(\d\d)(\d\d\d)(\d\d\d)/,
        '$1.$2-$3'
      );
    }
    return (
      address.zip_code &&
      address.zip_code.replace(/^(\d\d)(\d\d\d)(\d\d\d)/, '$1.$2-$3')
    );
  }

  public static formatAddress(value: unknown): string | null {
    const address = value as Address;
    if (address && address?.complement) {
      return `${address?.street}, ${address?.district}, Lt ${
        address?.allotment
      }, Qd ${address?.block}, nº ${address?.numberr}, cep ${HelpsService.mask(
        address
      )}, ${address?.complement}`;
    } else if (address) {
      return `${address?.street}, ${address?.district}, Lt ${
        address?.allotment
      }, Qd ${address?.block}, nº ${address?.numberr}, cep ${HelpsService.mask(
        address
      )}`;
    } else {
      return null;
    }
  }

  public static showWorkDays(values: unknown): string | null {
    const weekdays = moment.weekdays();
    const workDays = values as WorkDays;
    if (workDays) {
      const { sunday, monday, tuesday, thursday, wednesday, friday, saturday } =
        workDays;
      switch (moment().format('dddd')) {
        case weekdays[0]:
          return HelpsService.businessHours(sunday);
        case weekdays[1]:
          return HelpsService.businessHours(monday);
        case weekdays[2]:
          return HelpsService.businessHours(tuesday);
        case weekdays[3]:
          return HelpsService.businessHours(wednesday);
        case weekdays[4]:
          return HelpsService.businessHours(thursday);
        case weekdays[5]:
          return HelpsService.businessHours(friday);
        case weekdays[6]:
          return HelpsService.businessHours(saturday);
      }
    }
    return null;
  }

  public static businessHours(day: WorkDaysFields): 'Aberto' | 'Fechado' {
    const time = moment().format('HH:mm:ss');
    if (day?.startInterval && day.endInterval) {
      if (
        day?.start &&
        day?.startInterval &&
        time >= moment(day?.start).format('HH:mm:ss') &&
        time <= moment(day?.startInterval).format('HH:mm:ss')
      ) {
        return `Aberto`;
      } else {
        if (
          time >= moment(day?.startInterval).format('HH:mm:ss') &&
          time <= moment(day?.endInterval).format('HH:mm:ss')
        ) {
          return `Fechado`;
        } else {
          if (
            time >= moment(day?.endInterval).format('HH:mm:ss') &&
            time <= moment(day?.end).format('HH:mm:ss')
          ) {
            return `Aberto`;
          }
        }
        return `Fechado`;
      }
    } else {
      return day?.start &&
        time >= moment(day?.start).format('HH:mm:ss') &&
        time <= moment(day?.end).format('HH:mm:ss')
        ? 'Aberto'
        : 'Fechado';
    }
  }
}
