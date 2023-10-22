import {Component} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {
      title: 'First Post',
      content: '1 This is the first posts\' content'
    },
    {
      title: 'Second Post',
      content: '2 This is the first posts\' content'
    },
    {
      title: 'Third Post',
      content: '3 This is the first posts\' content'
    }
  ]
}
