import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: 'content', component: ContentComponent
  },
  {
    path: '', redirectTo: '/content', pathMatch: 'full'
  }
];
