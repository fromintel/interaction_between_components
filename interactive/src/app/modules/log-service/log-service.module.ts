import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostWrapperComponent } from './post-wrapper/post-wrapper.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostBlockComponent } from './post-block/post-block.component';
import { PostDataService } from "./services/post-data/post-data.service";



@NgModule({
  declarations: [PostWrapperComponent, PostContainerComponent, PostBlockComponent],
  exports: [
    PostWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [PostDataService]
})
export class LogServiceModule { }
