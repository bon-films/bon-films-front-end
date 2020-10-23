import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = 'http://localhost:8080/api/reviews';

  constructor(private httpClient: HttpClient) { }

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.reviews)
    );
  }
}

interface GetResponse {
  _embedded: {
    reviews: Review[];
  }
}
