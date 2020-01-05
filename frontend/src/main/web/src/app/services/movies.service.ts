import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchResult} from "../model/search-result";
import {Observable} from "rxjs";
import {MovieDetails} from "../model/movie-details";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

const URL = 'http://localhost:8080/movies/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  searchMovies(movieName: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(URL + 'search?movie=' + movieName);
  }

  getMovie(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(URL + 'movie?id=' + movieId);
  }

}
