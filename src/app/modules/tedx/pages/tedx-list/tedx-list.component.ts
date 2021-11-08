import { Component, OnInit } from '@angular/core';
import {TedxService} from '../../sandbox';
import {Tedx} from 'shared/models';
@Component({
  selector: 'app-tedx-list',
  templateUrl: './tedx-list.component.html',
  styleUrls: ['./tedx-list.component.scss']
})
export class TedxListComponent implements OnInit {
  tedsData?: Tedx[] = [];

  constructor(private TedxService:TedxService) { }

  ngOnInit(): void {
    this.getTeds();
    console.log(this.tedsData);
    
  }

getTeds(){
  this.TedxService.getTeds().subscribe(response => {
    if(response){
      this.tedsData = response.docs;
      
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
