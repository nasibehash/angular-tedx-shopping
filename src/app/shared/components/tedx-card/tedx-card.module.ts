import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipeModule} from 'shared/pipes';
import {RouterModule} from '@angular/router';
import { TedxCardComponent } from './tedx-card.component';


@NgModule({
  declarations: [
    TedxCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
  ],
  exports:[
    TedxCardComponent

  ]
})
export class TedxCardModule { }
