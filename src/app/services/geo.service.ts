import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class GeoService {

  lat: string;
  lng: string;
  api_key: string = 'AIzaSyCm57su8DrMy6jIpgC57NQnF2moExVOwhc';
  error: string = ''


  constructor(private http: HttpClient) { }

  populateInfo(info): void {
   if(info.results[0] != undefined) {
    this.lat = (info.results[0].geometry.location.lat).toString();
    this.lng = (info.results[0].geometry.location.lng).toString();
    this.error = ''
   } else {
    this.error = 'Not found'
   }
  }

  getLocation(address: string): Observable<any> {
   return this.http.get<object>(`https://maps.googleapis.com/maps/api/geocode/json?address=`
    + address + '&key=' + this.api_key);
   }
}