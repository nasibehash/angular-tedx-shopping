import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import {MatIconModule} from '@angular/material/icon';
import {TedxCardModule} from 'shared/components';
import { HomeComponent } from './pages';

import { WeekPodcastComponent } from './components';
import { NewestBookComponent } from './components/newest-book/newest-book.component';
import { EventsComponent } from './components/events/events.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    HomeComponent,
  
    WeekPodcastComponent,
    NewestBookComponent,
    EventsComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MatIconModule,
    TedxCardModule

  ],
  providers:[
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeModule { }
