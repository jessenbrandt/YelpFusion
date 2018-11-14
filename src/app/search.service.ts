import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", 'Authorization': "Bearer LbQScnwnaAhUlb8p_JNG1UXYl29FTBkdShbSqUGVcZxAkz5Sh5w122KAsgyK0J4IPA37BcriuyY-BqaEeJ_q_F6eN3C6-3CDtc1be0NM19a9Bc_H2fQwWSRipvXqW3Yx" })
  };

  private yelpAPI = "http://api.yelp.com/v3";
  private corsURL = "https://cors-anywhere.herokuapp.com"

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getYelp(price: string, location: string): Observable<any> {
    return this.http.get<any[]>(`${this.corsURL}/${this.yelpAPI}/businesses/search?location=${location}&price=${price}`, this.httpOptions).pipe(catchError(this.handleError("getYelp, []")))
  }

}
