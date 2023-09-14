import { Component, Input } from '@angular/core';
import { Movie, name } from '../app.component'; // named import
// import { Movie } from '../app.component';
// import cool from "../app.component"; // default import

console.log(name(10));

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: Movie = {
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
  };
}