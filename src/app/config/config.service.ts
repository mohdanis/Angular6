import { Injectable,OnInit } from '@angular/core';
import {Observable,throwError,of,Subject,BehaviorSubject,ReplaySubject} from 'rxjs';
import {catchError,retry,map,tap} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Data } from '../../../node_modules/@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Accept-Encoding': 'gzip',
     'x-api-key': environment.MU.AWSAPIKeyWeb
 })
};
@Injectable({
  providedIn: 'root'
})
export class ConfigService{
  constructor(private http:HttpClient) { }
  language:string = 'en';
  geo:string = 'in';
  baseApiUrl:string = environment.baseApiUrl+this.language+'/'+this.geo+'/';

// old code
  //sharedData = new Subject();
  subject = new Subject<any>();
  getSubject():Observable<any>{
   return new Subject().asObservable();
  }

  behaviourSubject = new BehaviorSubject<string>("mohd anis");
 getBehavior(){
  this.behaviourSubject.asObservable().subscribe((data) => {
    console.log("First subscriber got data >>>>> "+ data);
  });
  return this.behaviourSubject;
 }
 repSubject = new ReplaySubject<string>(2);
 getReplayData(){
  this.repSubject.asObservable().subscribe((data) => {
    console.log("First subscriber got data >>>>> "+ data);
  });
 }
 
 getData (url): Observable<[any]> {
  let  apiUrl = this.baseApiUrl+url;
  return this.http.get<[any]>(apiUrl,httpOptions)
    .pipe(
      tap(data => console.log(`fetched JSON Data`)),
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError<any>('getData'))
    );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
private log(message: string) {
  console.log('services failed: ' + message);
}
  
}
