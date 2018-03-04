import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from './list';


@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  fetchData(): Observable<List[]>{
    return this.http.get<List[]>('./assets/json/brand.json');
  }

}
