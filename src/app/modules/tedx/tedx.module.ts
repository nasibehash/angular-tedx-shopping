import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { TedxRoutingModule } from './tedx-routing.module';
import {TedxCardModule} from 'shared/components';
import { TedxListComponent ,TedxDetailsComponent} from './pages';


@NgModule({
  declarations: [
  
    TedxListComponent,
       TedxDetailsComponent,
  ],
  imports: [
    CommonModule,
    TedxRoutingModule,
    MatIconModule,
    TedxCardModule
  ]
})
export class TedxModule { }
