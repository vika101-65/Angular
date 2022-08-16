import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { throwError } from 'rxjs';

export interface User {
  email: string,
  password: string
}

@Injectable(
  {
  providedIn: 'root'
  }
)
export class MyServiceService {
  
  errorMessage: String = "";
  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:5000/api/';

  createUser(body: User) {
    return this.http.post(this.url + 'user/registration', body)
    .pipe(catchError((err) => {
      return of(err.error)
    }))
  }
}
