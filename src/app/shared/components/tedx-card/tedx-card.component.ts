import { Component, Input, OnInit } from '@angular/core';
import { Tedx } from 'shared/models';

@Component({
  selector: 'app-tedx-card',
  templateUrl: './tedx-card.component.html',
  styleUrls: ['./tedx-card.component.scss']
})
export class TedxCardComponent implements OnInit {
@Input() teds :Tedx ;
  constructor() { }

  ngOnInit(): void {
   
    
  }

}
