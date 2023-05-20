import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  private factsUrl = 'https://cat-fact.herokuapp.com/facts';
  // private catUrlAPI = `https://cataas.com/cat?time=${new Date().getTime()}${index}`

  constructor(private http: HttpClient) { }

  getCatFactsAndImages(): Observable<any> {
    return this.http.get<any>(this.factsUrl).pipe(
      map(facts => {
        let catFactsAndImages =
         facts.map((fact : any, index : any) => {
          let catUrlAPI = `https://cataas.com/cat?time=${new Date().getTime()}${index}`
          return {fact: fact.text, imageUrl: catUrlAPI};
        });
        return catFactsAndImages;
      })
    );
  }
}
