import { Injectable } from '@angular/core';
import { IFormData } from './data/IFormData';
import { FormData } from './data/mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  getData(): Observable<IFormData> {
    return of(FormData).pipe(delay(3000));
  }

  updateUser(): Observable<boolean> {
    return of(true).pipe(delay(3000));
  }
}
