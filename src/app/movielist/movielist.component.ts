import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../app.component';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovieListComponent {
  movieList: Array<Movie> = [];
  getMovieList: Subscription | any;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMoviesData();
  }

  loadMoviesData() {
    this.getMovieList = this.movieService
      .getMovieListFromMockAPI()
      .subscribe((mvList) => {
        this.movieList = mvList;
      });
  }

  ngOnDestroy() {
    this.getMovieList.unsubscribe();
  }
}