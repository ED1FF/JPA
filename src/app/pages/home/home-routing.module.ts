import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ReviewsPage } from './reviews/reviews.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'reviews',
        component: ReviewsPage,
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsPageModule),
      },
      {
        path: '',
        redirectTo: '/reviews',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
