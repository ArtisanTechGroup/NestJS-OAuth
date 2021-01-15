import { Injectable } from '@angular/core';
import { IFormData } from './data/IFormData';
import { FormData } from '../services/data/mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  getData(): Observable<IFormData> {
    return of(FormData).pipe(delay(1000));
  }
}
