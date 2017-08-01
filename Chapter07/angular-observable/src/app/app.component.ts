import { Component } from '@angular/core';
import { IMDBAPIService } from './services/imdbapi.service';
import { Movie, MovieFields } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable works!';
  private movies: Movie[] = [];
  private error: boolean = false;
  private finished: boolean = false;

  constructor(private IMDBAPI: IMDBAPIService) {


    let imdbSubscription = this.IMDBAPI.fetchByField(MovieFields.release_year, 2015).subscribe(
      value => {
        this.movies.push(value);
        console.log("Component", value)
        if (this.movies.length > 2) {
          imdbSubscription.unsubscribe();
        }

      },
      error => this.error = true,
      () => this.finished = true
    );

  }
}
