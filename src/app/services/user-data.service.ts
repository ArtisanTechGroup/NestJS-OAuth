import { Injectable } from '@angular/core';
import { IFormData } from './data/IFormData';
import { FormData } from './data/mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {  } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  data: IFormData;
  constructor(private http: HttpClient) {
    this.data = { ...FormData };
  }

  getData(id: string): Observable<IFormData> {
    of(FormData).pipe(delay(1000));
    return this.http.get<IFormData>(`${environment.defaultUri}/api/user/${id}`);
  }

  updateUser(updatedUser: IFormData, id: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    of(true).pipe(delay(1000));
    return this.http.put<boolean>(
      `${environment.defaultUri}/api/user/${id}`,
      updatedUser,
      { headers }
    );
  }
}
