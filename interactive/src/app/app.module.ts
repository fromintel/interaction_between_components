import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogServiceModule } from "./modules/log-service/log-service.module";
import { OutputModule } from "./modules/output/output.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LogServiceModule,
    OutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
