import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenRep} from "./api/models/token-rep";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "http://localhost:8080";
  headers = new HttpHeaders();
  constructor(private http: HttpClient) { }

  getAuthToken(): string | null {
    let token = window.localStorage.getItem("auth_token");
    console.log("saved token: " + token)
    return token
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      console.log("Setting token: " + token)
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  request(method: string, url: string, data: any){

    if (this.getAuthToken() !== null) {
      this.headers.set('Authorization', "Bearer " + this.getAuthToken());
    }
    let fullUrl = this.baseUrl + url;
    console.log(fullUrl);
    return this.http.request(
      method, fullUrl,
      {
        body: data,
        headers: this.headers
      }
    );
  }
  post(url: string, data: any): Observable<any>{
    let headers = new HttpHeaders()
    if (this.getAuthToken() !== null) {
      headers.set('Authorization', "Bearer " + this.getAuthToken());
    }
    let fullUrl = this.baseUrl + url;
    return this.http.post<TokenRep>(fullUrl, data, {headers});
  }

}
