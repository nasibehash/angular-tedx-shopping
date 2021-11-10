import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'shared/models';

@Component({
  selector: 'app-live-details',
  templateUrl: './live-details.component.html',
  styleUrls: ['./live-details.component.scss']
})
export class LiveDetailsComponent implements OnInit {
@Input() details:Details;
  constructor() { }

  ngOnInit(): void {
    console.log('details',this.details);
  }

}
