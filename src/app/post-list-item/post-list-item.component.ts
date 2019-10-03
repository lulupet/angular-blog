import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListItemTitle: string;
  @Input() postListItemDate: string;
  @Input() postListItemContent: string;
  @Input() postListItemLikes: number;

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.postListItemLikes ++;
  }

  dislike() {
    this.postListItemLikes --;
  }

}
