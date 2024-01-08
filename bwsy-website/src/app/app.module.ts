import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro';
import { CoursesComponent } from './courses';

import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    IntroComponent,
    CoursesComponent,
    ProjectsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
