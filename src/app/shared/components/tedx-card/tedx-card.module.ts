import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipeModule} from 'shared/pipes';

import { TedxCardComponent } from './tedx-card.component';


@NgModule({
  declarations: [
    TedxCardComponent
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports:[
    TedxCardComponent

  ]
})
export class TedxCardModule { }
