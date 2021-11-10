import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent,BookDetailsComponent } from './pages';
import {BookCardModule} from 'shared/components';

@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookCardModule
  ]
})
export class BooksModule { }
