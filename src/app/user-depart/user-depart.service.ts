import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserDepart } from './user-depart';
import { Depart } from '../depart/depart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDepartService {
  url : string = "http://localhost:3000/";
  diList : Array<UserDepart> = []; 
  private headers = new Headers();

  constructor(protected _http:Http) { 
    
  }
  getUserDepartList():Observable<any>{
    let url:string = "api/userdeparts/";
    return this._http.get(this.url + url);
  }

  updateUserDepart(ud:UserDepart):Observable<any>{
    let url:string = "api/userdeparts/update";
    return this._http.post(this.url + url, ud);
  }

  deleteDepartPost(ud:UserDepart):Observable<any>{
    let url:string = "api/userdeparts/" + ud;
    return this._http.delete(this.url + url);
  }

}
