import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JalaliFullPipe } from './jalali.pipe';
import {PersianDatePipe} from './persian-date.pipe';

const pipes = [ JalaliFullPipe,PersianDatePipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
  providers: [],
  imports: [CommonModule],
})
export class PipeModule {}
