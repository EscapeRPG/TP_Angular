declare const UIkit: any;

import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-films',
  imports: [HttpClientModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  movies: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    UIkit.modal("#modal-loading").show();

    setTimeout(() => {
      this.http.get<any>('http://localhost:3000/movies') // <-- URL de ton API
        .subscribe(response => {
          this.movies = response.data;

          UIkit.modal("#modal-loading").hide();
        });
    }, 1000);
  }
}
