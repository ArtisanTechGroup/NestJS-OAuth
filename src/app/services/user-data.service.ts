import { Injectable } from '@angular/core';
import { IFormData } from './data/IFormData';
import { FormData } from './data/mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  data: IFormData;
  constructor() {
    this.data = { ...FormData };
  }

  getData(): Observable<IFormData> {
    return of(FormData).pipe(delay(3000));
  }

  updateUser(updatedUser: IFormData): Observable<boolean> {
    this.data = { ...updatedUser };
    return of(true).pipe(delay(3000));
  }
}
