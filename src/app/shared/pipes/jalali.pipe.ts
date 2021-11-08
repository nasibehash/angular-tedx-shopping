import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment-jalaali';

moment.loadPersian({ dialect: 'persian-modern' });

@Pipe({
  name: 'jalaliFull',
})
export class JalaliFullPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return moment(value).format('LL');
  }
}
