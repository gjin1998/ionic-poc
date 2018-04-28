import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs/RX';

import { FinancialPerformance } from '../shared/models/financialPerformance.model';
import { environment } from '../../environments/environment';



@Injectable()
export class FinancialPerformanceService {//extends BaseService {

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

 // saveFinancialPerformance(financialPerformance: FinancialPerformance): Observable<FinancialPerformance> {
 //   return this.put(`${this.serviceBaseUrl}api/financialPerformances/savefinancialperformance`, financialPerformance);
 // }

  getFinancialPerformance(propertyId: number, finacialYear: number, userName: string): Observable<FinancialPerformance> {
    const httpOptions = {
        headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
    };  
    return this.http.get<FinancialPerformance>(`${this.serviceBaseUrl}api/financialPerformances/${propertyId}/${finacialYear}/${userName}`, httpOptions);
  }

}
