import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './app.component';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieList: Array<Movie> = [];

  constructor(private http: HttpClient) {}
  getMovieList() {
    return this.movieList;
  }

  getMovieListFromMockAPI() {
    return this.http.get<Movie[]>(
      'https://64f6f4189d7754084952d85e.mockapi.io/movies'
    );
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `https://64f6f4189d7754084952d85e.mockapi.io/movies/${id}`
    );
  }

  deleteMovieById(id: string) {
    return this.http.delete<Movie>(
      `https://64f6f4189d7754084952d85e.mockapi.io/movies/${id}`
    );
  }

  createMovie(newMovie: Movie) {
    return this.http.post(
      `https://64f6f4189d7754084952d85e.mockapi.io/movies`,
      newMovie
    );
  }

  updateMovieById(updatedMovie: Movie) {
    const id = updatedMovie.id;
    return this.http.put(
      `https://64f6f4189d7754084952d85e.mockapi.io/movies/${id}`,
      updatedMovie
    );
  }

  setMovieList(newMovie: Movie) {
    this.movieList.push(newMovie);
  }

  updateMovie(updatedMovie: Movie) {
    console.log(this.movieList);
    const id = updatedMovie.id;
    const index = this.movieList.findIndex((mv) => mv.id === id);
    this.movieList.splice(index, 1, updatedMovie);
   
  }
}