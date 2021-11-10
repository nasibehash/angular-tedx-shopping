import { PodcastCardModule } from 'shared/components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastRoutingModule } from './podcast-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { PodcastListComponent,PodcastDetailsComponent } from './pages';

@NgModule({
  declarations: [
    PodcastListComponent,
    PodcastDetailsComponent,
  ],
  imports: [
    CommonModule,
    PodcastRoutingModule,
    MatIconModule,
    PodcastCardModule
  ]
})
export class PodcastModule { }
