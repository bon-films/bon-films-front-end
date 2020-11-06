import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { VerifyComponent } from './components/auth/verify/verify.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewsByFilmComponent } from './components/reviews-by-film/reviews-by-film.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';

import { AuthGuard } from './services/guard/auth.guard';
import { SecureInnerPagesGuard } from './services/guard/secure-inner-pages.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, /* canActivate: [AuthGuard] */ },
  { path: 'reviews', component: ReviewsComponent, },
  { path: 'review/:id', component: ReviewDetailsComponent, },
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id/reviews', component: ReviewsByFilmComponent },
  { path: 'login', component: LoginComponent, /* canActivate: [SecureInnerPagesGuard] */ },
  { path: 'register', component: RegisterComponent, /* canActivate: [SecureInnerPagesGuard] */ },
  { path: 'forgot-password', component: ForgotComponent, /* canActivate: [SecureInnerPagesGuard] */ },
  { path: 'verify-email', component: VerifyComponent, /* canActivate: [SecureInnerPagesGuard] */ },
  { path: 'view-account', component: ViewAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
