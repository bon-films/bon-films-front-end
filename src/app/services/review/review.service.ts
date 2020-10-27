import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<GetResponse>(`http://localhost:8080/api/reviews`).pipe(
      map(response => response._embedded.reviews)
    );
  }

  getReviewById(id: String): Observable<Review> {
    return this.httpClient.get<Review>(`http://localhost:8080/api/review/${id}`);
  }
}

interface GetResponse {
  _embedded: {
    reviews: Review[];
  }
}
