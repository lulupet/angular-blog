import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postList = [
    {
      postListItemTitle: 'First post',
      postListItemContent: 'Lorem ipsum',
      postListItemDate: new Date()
    },
    {
      postListItemTitle: 'Second post',
      postListItemContent: 'Fuck Donald Trump',
      postListItemDate: new Date()
    }
  ];
}
