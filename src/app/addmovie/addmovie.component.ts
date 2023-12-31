import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movies.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddMovieFormComponent {
  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });

  movieList;
  constructor(
    private movieService: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieList = movieService.getMovieList();
  }

  get name() {
    return this.movieForm?.get('name');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }

  get poster() {
    return this.movieForm?.get('poster');
  }

  get summary() {
    return this.movieForm?.get('summary');
  }

  get trailer() {
    return this.movieForm?.get('trailer');
  }

  addMovie() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      console.log(newMovie);
      this.movieService.setMovieList(newMovie as unknown as Movie);
      this.movieService.createMovie(newMovie as unknown as Movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}