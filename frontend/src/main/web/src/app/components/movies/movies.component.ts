import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../model/movie";
import {FormControl} from "@angular/forms";
import {switchMap} from "rxjs/internal/operators/switchMap";
import {debounceTime, finalize} from "rxjs/operators";
import {tap} from "rxjs/internal/operators/tap";
import {LocalStorageService} from "../../services/local-storage.service";
import {MatDialog} from "@angular/material";
import {MovieComponent} from "../movie/movie.component";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent implements OnInit {

  searchMoviesCtrl = new FormControl();
  filteredMovies: Array<Movie> = new Array<Movie>();
  isLoading = false;
  errorMsg: string;
  isWish = false;

  constructor(private moviesService: MoviesService,
              private localStorageService: LocalStorageService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.filteredMovies = this.localStorageService.getFromLocal();

    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.moviesService.searchMovies(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredMovies = [];
        } else {
          this.errorMsg = "";
          this.filteredMovies = data['Search'];
        }
      });
  }

  isInLocal(movie): boolean {
    return this.localStorageService.isInLocal(movie);
  }

  handleWishList(movie: Movie) {
    if (this.isInLocal(movie)) {
      this.filteredMovies = this.localStorageService.removeFromLocal(movie);
    } else {
      this.localStorageService.addToLocal(movie);
      this.isWish = true;
    }
  }

  openDialog(id): void {
    if (!this.isWish) {
      const dialogRef = this.dialog.open(MovieComponent, {
        width: '50%',
        data: {id}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    this.isWish = false;
  }
}
