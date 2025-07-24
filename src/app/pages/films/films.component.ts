import {FilmsService} from '../../services/films.service';

declare const UIkit: any;

import {Component, inject, OnInit} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-films',
  imports: [],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  movies: any[] = [];

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
    UIkit.modal("#modal-loading").show();

    setTimeout(() => {
      this.filmsService.getMovies().subscribe({
        next: (json) => {
          this.movies = json.data;
          UIkit.modal("#modal-loading").hide();
        },
        error: (err) => {}
      });
    }, 1000);
  }
}
