import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/models/film';
import { Review } from 'src/app/models/review';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl + `/films`);
  }

  getReviewsByFilm(id: String): Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + `/film/${id}/reviews`);
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

