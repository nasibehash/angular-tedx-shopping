import { Details } from 'shared/models';
import { Tedx } from 'shared/models';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {TedxService} from '../../sandbox';
import { Comments } from 'shared/models/comments.model';

@Component({
  selector: 'app-tedx-details',
  templateUrl: './tedx-details.component.html',
  styleUrls: ['./tedx-details.component.scss']
})
export class TedxDetailsComponent implements OnInit {
@ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
isPlay: boolean = false;
tedId:string;

 tedsData=<Tedx> {};
 commentsData: Comments[] = [];
tabLoadTimes: Date[] = [];

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
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private TedxService:TedxService
  ) { 
   this.tedId = this.activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.getOneTeds();
    this.getComments();
  }
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
  getOneTeds(){
    this.TedxService.getOneTeds(this.tedId).subscribe(response => {
      if(response){
        this.tedsData = response;
    console.log(this.tedsData);
        
      }
      else{
        console.log('no content');
        
      }
    }
    , error => {
      console.log(error);
    })
  }
  getComments(){
    this.TedxService.getComments(this.tedId).subscribe(response => {
      if(response){
        this.commentsData = response.docs;
        
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
