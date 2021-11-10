import { Component, OnInit } from '@angular/core';
import {TedxService} from '../../sandbox';
import {PaginationContext, Tedx} from 'shared/models';
@Component({
  selector: 'app-tedx-list',
  templateUrl: './tedx-list.component.html',
  styleUrls: ['./tedx-list.component.scss']
})
export class TedxListComponent implements OnInit {
  tedsData?: Tedx[] = [];
  selectItems: any[] = [
    {id:1,title:'دسته بندی نتایج',isActive:true},
   { id:2,title:'دسته یک',isActive:false},
   { id:3,title:'دسته دو',isActive:false}
  ];
  dataPagination: PaginationContext = { page: 1, limit: 10, total:0 };

  constructor(private TedxService:TedxService) { }

  ngOnInit(): void {
    this.getTeds();
    
  }

getTeds(){
  this.TedxService.getTeds(this.dataPagination).subscribe(response => {
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
