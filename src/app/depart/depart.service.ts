import { Injectable } from '@angular/core';
import { Depart } from './depart';

@Injectable()
export class DepartService {
  diList : Array<Depart> = []; // 디파트 정보가지고 있는 배열 리스트 만들기
  constructor() {
    console.log("누군가는 부서생성자를 호출합니다.");
  }

  addDepart(di:Depart){
    this.diList.push(di);

    /*this.diList.push(this.di);
    this.di = new Depart(); // di 초기화 > 메모리 공유하지 않게
    console.log(this.diList);*/
  }
  getDepartList():Array<Depart>{
    return this.diList;
    //console.log("어? 나 생성한적 없는디??");
  }
}
