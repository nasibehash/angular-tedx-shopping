import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'shared/models/comments.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
@Input() comments :Comments ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comments.userData.mail);
    
  }

}
