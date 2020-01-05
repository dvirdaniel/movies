import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Movie} from "../model/movie";

const key = 'wishList';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  addToLocal(movie: Movie): Array<Movie> {

    let wishList: Array<Movie> = this.getFromLocal();
    wishList.push(movie);
    this.storage.set(key, wishList);
    return wishList;
  }

  isInLocal(movie: Movie): boolean {
    let isInLocal = false;
    let wishList: Array<Movie> = this.getFromLocal();

    let find = wishList.find(m => m.imdbID === movie.imdbID);
    if (find) {
      isInLocal = true;
    }

    return isInLocal;
  }

  removeFromLocal(movie: Movie): Array<Movie> {
    let wishList: Array<Movie> = this.getFromLocal();

    const index = wishList.findIndex(m => m.imdbID === movie.imdbID);
    if (index > -1) {
      wishList.splice(index, 1);
    }
    this.storage.set(key, wishList);
    return wishList;
  }

  getFromLocal(): Array<Movie> {
    return this.storage.get(key) ? this.storage.get(key) : new Array<Movie>();
  }
}
