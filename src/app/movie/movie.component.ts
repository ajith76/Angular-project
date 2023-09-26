import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, name } from '../app.component';
import { MovieService } from '../movies.service';


console.log(name(10));

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: Movie = {
    id: '99',
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    trailer: 'https://www.youtube.com/embed/OKBMCL-frPU',
  };

  @Output() removeMovie = new EventEmitter();

  show = true;

  constructor(private router: Router, private moviesService: MovieService) {}

  toggleSummary() {
    this.show = !this.show;
  }

  gotoMovieDetail() {
    this.router.navigate([`/movies`, this.movie.id]);
  }

 

  editMovie() {
    this.router.navigate(['/movies/edit', this.movie.id]);
  }


  deleteMovie() {
    this.moviesService.deleteMovieById(this.movie.id).subscribe(() => {
      console.log('Movie deleted successfully');
      this.removeMovie.emit();
    });
}
}