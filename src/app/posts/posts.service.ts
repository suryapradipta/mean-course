import {Injectable} from '@angular/core';
import {PostModel} from "./post.model";
import {HttpClient} from "@angular/common/http";
import {map, Subject} from "rxjs";


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
    this.http.get<{ message: string, posts: any }>
    ('http://localhost:3000/api/posts')
      .pipe(map((postData)=>{
        return postData.posts.map(post=>{
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      })).subscribe(transformedPosts =>{
        this.posts = transformedPosts;
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

    this.http.post<{message: string, postId: string}> ('http://localhost:3000/api/posts', post)
      .subscribe((responData)=>{
        post.id = responData.postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      })
  }

  deletePost(postId: string){
    this.http.delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(()=>{
        const updatePosts = this.posts.filter(post=> post.id !==postId);
        this.posts = updatePosts;
        this.postsUpdated.next([...this.posts]);
      })
  }
}
