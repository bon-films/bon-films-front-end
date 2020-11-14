import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FilmReview } from 'src/app/models/film-review';
import { Review } from 'src/app/models/review';
import { Film } from 'src/app/models/film';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
  ) { }

  getAllReviews(): Observable<FilmReview[]> {
    return this.http.get<FilmReview[]>(this.baseUrl + '/reviews');
  }

  getReviewById(id: string): Observable<Review> {
    return this.http.get<Review>(this.baseUrl + `/review/${id}`);
  }

  createReview(rating: number, review: string, userReviewedId: string, film: Film): Observable<Review> {
    let body: Review = {
      id: null,
      rating: rating,
      review: review,
      userReviewedId: userReviewedId,
      film: film,
      dateReviewed: null,
    };

    return new Observable<Review>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.post<Review>(
            this.baseUrl + `/review/create`,
            body,
            httpOptionsWithAuthToken(token),
          ).subscribe(() => observer.next());
        })
      })
    });
  }

  editReview(id: number, rating: number, review: string): Observable<Review> {
    return new Observable<Review>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.put<Review>(
            this.baseUrl + `/review/${id}`,
            { rating, review },
            httpOptionsWithAuthToken(token),
          ).subscribe(() => observer.next());
        })
      })
    })
  }

  deleteReview(id: string): Observable<any> {
    return new Observable<any>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.delete(
            this.baseUrl + `/review/${id}`,
            httpOptionsWithAuthToken(token)
          ).subscribe(() => observer.next());
        })
      })
    })
  }
}

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOptionsWithAuthToken = token => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token,
  }),
});
