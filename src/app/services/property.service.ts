import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { PropertySearchRequest, PropertySearchPagingData, PropertyVM, Property } from "../property/property.model";

import { BaseService } from "./base.service";
import { environment } from '../../environments/environment';

@Injectable()
export class PropertyService  {
    private serviceBaseUrl: string;
    private options:any;
  constructor(private http: HttpClient) {
    this.serviceBaseUrl = environment.serviceBaseUrl;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
        'Access-Control-Allow-Headers':
            '*,Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control',
        'Authorization': environment.authorizationToken
    });
    this.options = ({ headers: headers });
  }

  getProperties(offset: number, limit: number, returnAll: boolean): Observable<PropertySearchPagingData> {
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
    };
    return this.http.get<PropertySearchPagingData>(`${this.serviceBaseUrl}/api/properties/${offset}/${limit}/${returnAll}`, httpOptions);
    //return this.get<PropertySearchPagingData>(`${this.serviceBaseUrl}/api/properties/${offset}/${limit}/${returnAll}`);
  }

  
  
  getPropertiesChunk( offset: number, limit: number): Observable<PropertyVM[]> {
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
    };
    return this.http.get<PropertyVM[]>(`${this.serviceBaseUrl}/api/properties/Page/${offset}/${limit}`, httpOptions);
  }

  filterProperties(query:string, offset: number, limit: number): Observable<PropertyVM[]> {
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
    };
    return this.http.get<PropertyVM[]>(`${this.serviceBaseUrl}/api/properties/Filter/${query}/${offset}/${limit}/false`, httpOptions);
  }

  getProperty(id :number): Observable<Property> {
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
    };
    return this.http.get<Property>(`${this.serviceBaseUrl}/api/properties/${id}`, httpOptions);
  }
 
}
