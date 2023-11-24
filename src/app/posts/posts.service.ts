import {Injectable} from '@angular/core';
import {PostModel} from "./post.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: PostModel [] = [];


  //new backend
  private postsUpdated = new Subject<PostModel[]>();

  constructor(private http: HttpClient) {
  }


  //new backend
  getPosts() {
    this.http.get<{ message: string, posts: PostModel[] }>
    ('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      })
  }

  //new backend
  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }


  //new backend
  addPost(title: string, content: string) {
    const post: PostModel = {id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responData)=>{
        console.log(responData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      })
  }
}
