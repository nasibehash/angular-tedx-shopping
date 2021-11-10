import { Component, OnInit } from '@angular/core';
import { Podcast } from 'shared/models';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {
  selectItems: any[] = [
    {id:1,title:'دسته بندی نتایج',isActive:true},
   { id:2,title:'دسته یک',isActive:false},
   { id:3,title:'دسته دو',isActive:false}
  ];
  podcastData?: Podcast[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectItems.forEach(element => 
    console.log(element.title)

      )
    
  }

}
