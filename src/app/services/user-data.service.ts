import { Injectable } from '@angular/core';
import { IFormData } from './data/IFormData';
import { FormData } from './data/mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  data: IFormData;
  constructor(private http: HttpClient) {
    this.data = { ...FormData };
  }

  getData(id: string): Observable<IFormData> {
    // return of(FormData).pipe(delay(1000));
    return this.http.get<IFormData>(`http://localhost:4200/api/user/${id}`);
  }

  updateUser(updatedUser: IFormData): Observable<boolean> {
    this.data = { ...updatedUser };
    return of(true).pipe(delay(1000));
  }
}
