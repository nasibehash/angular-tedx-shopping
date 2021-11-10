import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianDate',
})
export class PersianDatePipe implements PipeTransform {
  transform(value: Date, arg?: string): string {
    switch (arg) {
      case 'LL': {
        return new Date(value).toLocaleDateString('fa-Ir', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
      }
      default: {
        return new Date(value).toLocaleDateString('fa-Ir');
      }
    }
  }
}