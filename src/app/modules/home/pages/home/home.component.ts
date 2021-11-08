import { PaginationContext, Tedx } from 'shared/models';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {HomeService} from '../../sandbox';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tedsData?: Tedx[] = [];
  dataPagination: PaginationContext = { page: 1, limit: 10, total:0,sort: 'createdAt' };

  constructor(private HomeService:HomeService) { }

  
  config1: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    // pagination: true,
    autoplay: true,
    centeredSlides: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 3
      }
    }
  }
  config2: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    // pagination: true,
    autoplay: true,
    centeredSlides: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      },
      1400: {
        slidesPerView:1
      }
    }
  }
  config3: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 10,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    // pagination: true,
    autoplay: true,
    centeredSlides: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 4
      },
      1400: {
        slidesPerView:4
      }
    }
  }
  ngOnInit(): void {
    this.getTeds();
  }
  getTeds(){
    this.HomeService.getTeds().subscribe(response => {
      if(response){
        this.tedsData = response.docs;
        this.dataPagination = { page: response.data.page, limit: response.data.limit, total: response.data.total,sort: 'createdAt' };
        
      }
      else{
        console.log('no content');
        
      }
    }
    , error => {
      console.log(error);
    })
  }
}
