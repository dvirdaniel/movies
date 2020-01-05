package app.service;

import app.model.Movie;
import app.model.MovieDetails;
import app.model.SearchResult;
import app.persistence.entity.MovieEntity;
import app.persistence.repository.MovieRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Service
public class MoviesService {

    private static final String URL = "http://www.omdbapi.com/";
    private static final String KEY = "bb182d9e";

    @Autowired
    private MovieRepository movieRepository;

    ModelMapper modelMapper = new ModelMapper();

    public SearchResult searchMoviesInDB(String movieName) {

        final List<Movie> movies = new ArrayList<>();
        if (!movieName.isEmpty()) {
            List<MovieEntity> dbMovies = movieRepository.findByTitleIgnoreCaseContaining(movieName);

            dbMovies.stream().forEach(movieEntity -> {
                movies.add(modelMapper.map(movieEntity, Movie.class));
            });
        }

        SearchResult searchResult = new SearchResult();
        searchResult.setMovies(movies);
        searchResult.setTotalResults(movies.size());
        searchResult.setResponse("True");
        searchResult.setFromDB(true);

        return searchResult;
    }

    private void saveMoviesInDB(List<MovieEntity> movies) {
        movieRepository.saveAll(movies);
        movieRepository.flush();
    }

    public SearchResult searchMoviesInAPI(String movieName) {
        Client client = ClientBuilder.newClient();

        WebTarget target = client.target(URL)
                .queryParam("apikey", KEY)
                .queryParam("type", "movie")
                .queryParam("s", movieName);

        SearchResult searchResult = target.request(MediaType.APPLICATION_JSON).get(SearchResult.class);

        if (searchResult != null && searchResult.getMovies() != null) {
            final List<MovieEntity> movies = new ArrayList<>();
            searchResult.getMovies().stream().forEach(movie -> movies.add(modelMapper.map(movie, MovieEntity.class)));
            saveMoviesInDB(movies);
        }

        return searchResult;
    }

    public MovieDetails searchMovieInAPI(String imdbID) {
        Client client = ClientBuilder.newClient();

        WebTarget target = client.target(URL)
                .queryParam("apikey", KEY)
                .queryParam("i", imdbID);

        MovieDetails movie = target.request(MediaType.APPLICATION_JSON).get(MovieDetails.class);

        return movie;
    }
}
