import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastCardComponent } from './podcast-card.component';


@NgModule({
  declarations: [
    PodcastCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    PodcastCardComponent

  ]
})
export class PodcastCardModule { }
