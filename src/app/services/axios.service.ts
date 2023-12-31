import { Injectable } from '@angular/core';
import axios from 'axios';
import {TokenRep} from "./api/models/token-rep";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL =  "http://localhost:8080";
    axios.defaults.headers.post["Content-type"] = "application/json";
  }

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


  request(method: string, url: string, data: any): Promise<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }
    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }

}
