import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  getIpAddress() : Observable <{ ip : string}> {
    return this.http.get<{ ip : string }>('https://api.ipify.org?format=json')
  }

  getGeoLocation(ip : string) : Observable<any> {
    return this.http.get<any>(`http://ip-api.com/json/${ip}`)
  }

  getGeoLocationFromIP() : Observable<any>
  {
    return this.getIpAddress().pipe(
      switchMap(({ ip }) => this.getGeoLocation(ip))
    )
  }
}
