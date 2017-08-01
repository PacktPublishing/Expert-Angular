import { Movie } from './movie'

export class MoviePool {

    private static movies: [{ movie: Movie, used: boolean }];
    private static nbMaxMovie = 10;
    private static instance: MoviePool;

    private constructor() { }

    public static getMovie() {

        //first hard create
        if (MoviePool.movies.length == 0) {

            MoviePool.movies.push({ movie: new Movie(), used: true });
            return MoviePool.movies[0].movie;

        } else {

            for (var reusableMovie of MoviePool.movies) {
                if (!reusableMovie.used) {
                    reusableMovie.used = true;
                    return reusableMovie.movie;
                }
            }
        }

        //subsequent clone create
        if (MoviePool.movies.length < MoviePool.nbMaxMovie) {

            MoviePool.movies.push({ movie: MoviePool.movies[MoviePool.movies.length - 1].movie.clone(), used: true });
            return MoviePool.movies[MoviePool.movies.length - 1].movie;
        }

        throw new Error('Out of movies');
    }

    public static releaseMovie(movie: Movie) {
        for (var reusableMovie of MoviePool.movies) {
            if (reusableMovie.movie === movie) {
                reusableMovie.used = false;
            }
            return;
        }
    }
}
