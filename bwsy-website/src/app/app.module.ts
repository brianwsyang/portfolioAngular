import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, IntroComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
