import {Component, Input} from '@angular/core';
import {PostModel} from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  /*posts = [
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
  ];*/

  //Bind data from the outside(direct parent) to this component
  @Input() posts: PostModel[] = [];
}
