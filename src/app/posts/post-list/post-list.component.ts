import {Component, OnInit} from '@angular/core';
import {PostModel} from "../post.model";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

   posts: PostModel[] = [];

   constructor(public postsService: PostsService) {
   }

   ngOnInit() {
     this.posts = this.postsService.getPosts();
   }
}
