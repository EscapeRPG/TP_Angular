import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../models/api-response';
import {Movie} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<ApiResponse<Movie[]>> {
    return this.http.get<ApiResponse<Movie[]>>(`http://localhost:3000/movies`);
  }
}
