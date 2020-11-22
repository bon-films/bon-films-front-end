import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {Film} from 'src/app/models/film';
import {Review} from 'src/app/models/review';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
  ) {
  }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl + `/films`);
  }

  getReviewsByFilm(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + `/film/${id}/reviews`);
  }

  createFilm(title: string, genre: string, studio: string, director: string, topBilling: string, synopsis: string): Observable<Film> {
    let body: Film = {
      id: null,
      title: title,
      genre: genre,
      studio: studio,
      director: director,
      topBilling: topBilling,
      synopsis: synopsis,
      reviews: null,
    };

    return new Observable<Film>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.post<Film>(
            this.baseUrl + `/film/create`,
            body,
            httpOptionsWithAuthToken(token),
          ).subscribe(() => observer.next());
        });
      });
    });
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

