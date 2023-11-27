import {Component, OnInit} from '@angular/core';
import {PostModel} from "../post.model";
import {PostsService} from "../posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostModel[] = [];

  //new backend
  private postsSub: Subscription | undefined;

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener()
      .subscribe((posts: PostModel[]) => {
        this.posts = posts;
      })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
}
