import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from 'src/app/models/review';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + '/reviews');
  }

  getReviewById(id: String): Observable<Review> {
    return this.http.get<Review>(this.baseUrl + `/review/${id}`);
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
