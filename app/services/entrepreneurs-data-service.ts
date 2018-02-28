import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Entrepreneur } from '../models/entrepreneur-interface';

const entrepreneursApi: string = 'http://localhost:3000/entrepreneurs';

@Injectable()
export class EntrepreneursDataService {
  constructor(private http: Http) {}

  loadEntrepreneursList(): Observable<Entrepreneur[]> {
    return this.http
    .get(entrepreneursApi)
    .map((response: Response) => response.json()) 
    .catch((error: any) => Observable.throw(error.json()));
  }

  loadEntrepreneurDetails(id: number): Observable<Entrepreneur> {
    return this.http
    .get(`${entrepreneursApi}/${id}`)
    .map((response: Response) => <Entrepreneur>response.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

  saveNewEntrepreneur(entrepreneur: Entrepreneur) {
    let headers = new Headers({
			'Content-Type': 'application/json'
		});
		let options = new RequestOptions({
			headers: headers
		});
    return this.http
    .post(`${entrepreneursApi}`, entrepreneur, options)
    .map((response: Response) => response.json())
		.catch((error: any) => Observable.throw(error.json()));

  }

  deleteEntrepreneur(id) {
    return this.http
    .delete(`${entrepreneursApi}/${id}`);
  }

  saveEntrepreneurChanges(entrepreneur: Entrepreneur, id: number): Observable<Entrepreneur> {
    console.log(entrepreneur);
    let headers = new Headers({
			'Content-Type': 'application/json'
		});
		let options = new RequestOptions({
			headers: headers
    });
    return this.http
    .put(`${entrepreneursApi}/${id}`, entrepreneur, options)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()));    
  }
}

