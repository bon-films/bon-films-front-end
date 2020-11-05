import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { VerifyComponent } from './components/auth/verify/verify.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/firebase/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewService } from './services/review/review.service';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    VerifyComponent,
    HomeComponent,
    ViewAccountComponent,
    NavbarComponent,
    ReviewDetailsComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [AuthService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
