package app.controller;

import app.model.Movie;
import app.model.MovieDetails;
import app.model.SearchResult;
import app.service.MoviesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/movies")
public class MoviesController {

    @Autowired
    private MoviesService moviesService;

    @GetMapping("/search")
    public SearchResult searchMovies(@RequestParam(value="movie") String movieName) {

        SearchResult searchResult = moviesService.searchMoviesInDB(movieName);

        if (searchResult.getTotalResults() == 0) {
            searchResult = moviesService.searchMoviesInAPI(movieName);
        }

        return searchResult;
    }

    @GetMapping("/movie")
    public MovieDetails searchMovie(@RequestParam(value="id") String imdbID) {
        return moviesService.searchMovieInAPI(imdbID);
    }
}
