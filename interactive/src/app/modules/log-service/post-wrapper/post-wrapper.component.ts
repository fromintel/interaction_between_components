import { Component, OnInit } from '@angular/core';
import { PostDataService } from "../services/post-data/post-data.service";

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {

  constructor(private postDataService: PostDataService) { }

  ngOnInit() {
  }

  handlePostData() {
    this.postDataService.setPostData({ id: 111, author: 'Arthur Morgan', message: 'some text', title: 'rdr2' })
  }
}
