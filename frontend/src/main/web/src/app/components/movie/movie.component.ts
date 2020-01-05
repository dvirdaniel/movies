import {Component, Inject, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {MovieDetails} from "../../model/movie-details";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less']
})
export class MovieComponent implements OnInit {

  movie: MovieDetails = new MovieDetails();
  loading: boolean = true;

  constructor(private moviesService: MoviesService,
              public dialogRef: MatDialogRef<MovieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    let id = this.data.id;
    if (id) {
      this.moviesService.getMovie(id).subscribe(m => {
        this.movie = m;
        this.loading = false;
      });
    }
  }

  split(movie: MovieDetails, field: string): Array<String> {
    let values: Array<String> = new Array<String>();
    if (movie && movie[field]) {
      values = movie[field].split(',');
    }
    return values;
  }

}
