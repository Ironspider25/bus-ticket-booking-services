import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry } from 'rxjs';
import { Seat, SeatsApiResponse } from '../models/seats.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  constructor(private httpClient: HttpClient) { }

  fetchSeats(): Observable<Seat[]> {
    const URL: string = '../assets/json/seats.json';
    return this.httpClient.get<SeatsApiResponse>(URL).
      pipe(
        retry(3),
        map((data) => {
          return data?.results as Seat[];
        }),
        catchError((err) => {
          return [];
        })
      );
  }

  generateUserForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
}
