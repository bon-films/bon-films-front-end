import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForgotComponent} from './components/auth/forgot/forgot.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {VerifyComponent} from './components/auth/verify/verify.component';
import {CreateReviewComponent} from './components/create-review/create-review.component';
import {FilmsComponent} from './components/films/films.component';
import {HomeComponent} from './components/home/home.component';
import {MyReviewsComponent} from './components/my-reviews/my-reviews.component';
import {ReviewDetailsComponent} from './components/review-details/review-details.component';
import {ReviewsByFilmComponent} from './components/reviews-by-film/reviews-by-film.component';
import {ReviewsComponent} from './components/reviews/reviews.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,},
  {path: 'reviews', component: ReviewsComponent,},
  {path: 'review/:id', component: ReviewDetailsComponent,},
  {path: 'films', component: FilmsComponent},
  {path: 'film/:id/reviews', component: ReviewsByFilmComponent},
  {path: 'create-review', component: CreateReviewComponent},
  {path: 'my-reviews', component: MyReviewsComponent},
  {path: 'login', component: LoginComponent,},
  {path: 'register', component: RegisterComponent,},
  {path: 'forgot-password', component: ForgotComponent,},
  {path: 'verify-email', component: VerifyComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
