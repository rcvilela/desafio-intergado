import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseRestService } from './base-rest.service';
import { HttpClient } from '@angular/common/http';
import { AnimalModel } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends BaseRestService<AnimalModel>{

  constructor(public http: HttpClient) {
    super(http, 'animal/');
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.actionUrl);
  }

  create(animal: any): Observable<any> {
    return this.http.post<any>(this.actionUrl, animal, { observe: 'response' });
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.actionUrl + '/' + id, { observe: 'response' });
  }
}
