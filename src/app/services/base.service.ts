import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

export class BaseService {
    options: Object;
    serviceBaseUrl: string;
    azureAdApiBaseUrl: string;
 
    private httpClient: HttpClient;

    constructor(http: HttpClient = null) {
        this.httpClient = http;

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
            'Access-Control-Allow-Headers':
                '*,Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control',
            'Authorization': environment.authorizationToken
        });
        this.options = ({ headers: headers });
        this.serviceBaseUrl = environment.serviceBaseUrl;
        this.azureAdApiBaseUrl = environment.azureAdApiBaseUrl;
    }

    get<T>(url: string): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
        };
        return this.httpClient.get<T>(url, httpOptions)
            .pipe(catchError(this.handleError2(url, []))
            );
    }

    post<T>(url: string, data: T): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'authorization': environment.authorizationToken,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
                'Access-Control-Allow-Headers':
                    '*,Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control'
            })
        };
        return this.httpClient.post<T>(url, data, httpOptions)
            .pipe(catchError(this.handleError2(url, []))
            );
    }

    put<T>(url: string, data: T): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
        };

        return this.httpClient.put<T>(url, data, httpOptions)
            .pipe(catchError(this.handleError2()));
    }

    delete<T>(url): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({ 'authorization': environment.authorizationToken })
        };

        return this.httpClient.delete(url, httpOptions)
            .pipe(catchError(this.handleError2(url, [])));
    }


    protected handleError1(error: HttpErrorResponse) {
        return Observable.throw(error.message);
    }

    protected handleError2<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<any> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
