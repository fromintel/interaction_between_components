import { Component, OnInit } from '@angular/core';
import { PostDataService } from "../services/post-data/post-data.service";
import { Post } from "../../../interfaces/post";

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.scss']
})
export class PostBlockComponent implements OnInit {
  public posts: Post[];

  constructor(private postDataService: PostDataService) {
    this.posts = [];
  }

  ngOnInit() {
    this.initPostDataListener();
  }

  initPostDataListener(): void {
    this.postDataService.getPostData()
      .subscribe({
        next: (post: Post) => this.posts.push(post)
      })
  }

}
