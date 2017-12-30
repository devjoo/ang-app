import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Depart } from './depart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartService {
  url : string = "http://localhost:3000/"
  diList : Array<Depart> = []; // 디파트 정보가지고 있는 배열 리스트 만들기
  private headers = new Headers();
  constructor(protected _http:Http) {
    this.headers.append("Content-type","application/json;charset=utf-8");
    this.headers.append("Accept","application/json;charset=utf-8");
    console.log("누군가는 부서생성자를 호출합니다.");
  }

  addDepart(di:Depart){
    let  url : string = "api/depart?name=test&diName=ditest";
    return this._http.get(this.url + url);
    
    /*this.diList.push(this.di);
    this.di = new Depart(); // di 초기화 > 메모리 공유하지 않게
    console.log(this.diList);*/
  }

  addDepartPost(di:Depart):Observable<any>{
    let url:string = "api/departs";
    return this._http.post(this.url + url, di);
  }

  deleteDepartPost(di:Depart):Observable<any>{
    let url:string = "api/departs/" + di.diNo;
    return this._http.delete(this.url + url);
  }

  getDepartList(diNo:string):Observable<any>{
    let url:string = "api/departs/" + diNo;
    return this._http.get(this.url + url);
    //console.log("어? 나 생성한적 없는디??");
  }
}
