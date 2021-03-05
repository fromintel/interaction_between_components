import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { Post } from "../../../../interfaces/post";

@Injectable()
export class PostDataService {
  private post$: Subject<Post>

  constructor() {
    this.post$ = new Subject<Post>();
  }

  setPostData(post: Post): void {
    this.post$.next(post);
  }

  getPostData(): Observable<Post> {
    return this.post$.asObservable();
  }
}
