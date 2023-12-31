import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  constructor() { }

  public static componentToShow: string = "welcome"
  public static isAuthorized: boolean = false;

  public static showComponent(show: string) {
    this.componentToShow = show;
  }

  public static setIsAuthorized(isAuthorized: boolean){
    this.isAuthorized = isAuthorized;
  }

}
