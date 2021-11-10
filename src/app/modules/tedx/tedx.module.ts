import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { TedxRoutingModule } from './tedx-routing.module';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { InlineSVGModule } from 'ng-inline-svg';
import {MatTabsModule} from '@angular/material/tabs';
import {TedxCardModule,CommentCardModule} from 'shared/components';
import {PipeModule} from 'shared/pipes';
import { TedxListComponent ,TedxDetailsComponent} from './pages';
import { AboutSpeakerComponent,LiveDetailsComponent } from './components';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    TedxListComponent,
       TedxDetailsComponent,
       AboutSpeakerComponent,
       LiveDetailsComponent,
  ],
  imports: [
    CommonModule,
    TedxRoutingModule,
    MatIconModule,
    TedxCardModule,
    MatTabsModule,
    InlineSVGModule.forRoot(),
    CommentCardModule,SwiperModule,
    PipeModule
  ],
  providers:[
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class TedxModule { }
