import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TedxRoutingModule } from './tedx-routing.module';
import { TedxComponent } from './tedx.component';


@NgModule({
  declarations: [
    TedxComponent
  ],
  imports: [
    CommonModule,
    TedxRoutingModule
  ]
})
export class TedxModule { }
