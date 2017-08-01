import { Component } from '@angular/core';
import { IMDBAPIService } from './services/imdbapi.service';
import { Movie, MovieFields } from './models/movie';
import { MovieIDValidator } from './movie-id.validator'

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-promises works!';

  private movies: Movie[] = [];
  private error: boolean = false;
  private finished: boolean = false;
  private movieForm: FormGroup;
  private movie: Movie = new Movie(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  constructor(private IMDBAPI: IMDBAPIService, private formBuilder: FormBuilder) {


    this.movieForm = this.formBuilder.group({
      movie_id: ['',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4),
            Validators.pattern('[0-9]+'),
            MovieIDValidator.idNotTaken
          ]
        )
      ],
      title: ['', Validators.required],
      phase: ['', Validators.required],
      category_name: ['', Validators.required],
      release_year: ['', Validators.required],
      running_time: ['', Validators.required],
      rating_name: ['', Validators.required],
      disc_format_name: ['', Validators.required],
      number_discs: ['', Validators.required],
      viewing_format_name: ['', Validators.required],
      aspect_ratio_name: ['', Validators.required],
      status: ['', Validators.required],
      release_date: ['', Validators.required],
      budget: ['', Validators.required],
      gross: ['', Validators.required],
      time_stamp: ['', Validators.required]
    });

    this.IMDBAPI.fecthOneById(1).then(
      value => {
        this.movies.push(value);
        console.log("Component", value)
      },
      error => this.error = true
    );

    this.IMDBAPI.fetchByField(MovieFields.release_year, 2015).then(
      value => {
        this.movies = value;
        console.log("Component", value)
      },
      error => this.error = true
    )

    this.IMDBAPI.byField(MovieFields.release_year, 2015)
      .or(MovieFields.release_year, 2014)
      .or(MovieFields.phase, "Phase Two")
      .fetch()
      .then(
      value => {
        this.movies = value;
        console.log("Component", value)
      },
      error => this.error = true
      );
  }

  private submit() {
    if (this.movieForm.valid) {


      console.log(this.movie);

      //persist
    } else {
      console.error("Form not valid");
    }

  }
}
