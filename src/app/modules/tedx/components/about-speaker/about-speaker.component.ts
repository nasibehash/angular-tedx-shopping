import { Component, Input, OnInit } from '@angular/core';
import { Speakers } from 'shared/models';

@Component({
  selector: 'app-about-speaker',
  templateUrl: './about-speaker.component.html',
  styleUrls: ['./about-speaker.component.scss']
})
export class AboutSpeakerComponent implements OnInit {
@Input() speakerData: Speakers;
  constructor() { }

  ngOnInit(): void {
    console.log(this.speakerData);
    
  }

}
