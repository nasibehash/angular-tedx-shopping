import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JalaliFullPipe } from './jalali.pipe';


const pipes = [ JalaliFullPipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
  providers: [],
  imports: [CommonModule],
})
export class PipeModule {}
