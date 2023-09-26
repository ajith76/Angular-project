import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movie } from '../app.component';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MovieDetailComponent {
  id: string = '';
  movie: any;
  trailer: any; 

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe((mv) => {
      console.log(mv);
      this.movie = {
        ...mv,
        trailer: this.sanitizer.bypassSecurityTrustResourceUrl(mv.trailer),
      };
    });
  }
}