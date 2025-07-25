import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/login`, user);
  }
}
