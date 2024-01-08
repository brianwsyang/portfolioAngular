import { Routes } from '@angular/router';

import { IntroComponent } from './intro';
import { CoursesComponent } from './courses';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'projects', component: ProjectsComponent },

  { path: '**', redirectTo: '' },
];
