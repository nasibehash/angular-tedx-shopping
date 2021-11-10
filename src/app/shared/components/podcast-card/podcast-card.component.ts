import { Component, Input, OnInit } from '@angular/core';
import { Podcast } from 'shared/models';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.scss']
})
export class PodcastCardComponent implements OnInit {
  @Input() podcast :Podcast ;

  constructor() { }

  ngOnInit(): void {
  }

}
