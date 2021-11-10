import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCardComponent } from './comment-card.component';
import {PipeModule} from 'shared/pipes';


@NgModule({
  declarations: [
    CommentCardComponent
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports:[
    CommentCardComponent

  ]
})
export class CommentCardModule { }
