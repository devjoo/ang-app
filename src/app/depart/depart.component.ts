import { Component, OnInit } from '@angular/core';
import { Depart } from './depart';
import { DepartService } from './depart.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css'],
  providers:[DepartService] //얘를 사용하겠다고 providers로 지정해줘야한다 
})
export class DepartComponent implements OnInit {
  di : Depart;
  title : string = "부서정보";
  button : string = "보기";
  btnStr : string = "보기"; // 쌤이 한거
  isShow : boolean = false;
  diList : Array<Depart> = []; // 디파트 정보가지고 있는 배열 리스트 만들기
  diService : DepartService;
  
  constructor(private dis:DepartService) {
    this.di = new Depart();  // 메모리에 생성해야 사용할수있다
    //dis.getDepartList();
    console.log("나도 누군가를 호출하겠지!!");

    /*this.di.dino = 1;
    this.di.dicnt = 1;
    this.di.diname = "개발팀";
    this.di.didesc = "맨날 야근하는 팀";
    console.log(this.di);*/
  }

  ngOnInit() {
  }
  addDepart():void{
    this.dis.addDepart(this.di);
    this.di = new Depart();
  }
  showDepartList():void{
    this.diList = this.dis.getDepartList();
  }
  deleteDepart(item):void{
    var index = this.diList.indexOf(item);
    this.diList.splice(index, 1);
  }
  getFine(dino):number{
    let idx : number = -1;
    this.diList.forEach((di, index)=>{
      console.log(di.dino + ',' + dino);
      if(di.dino==dino){
        idx =  index;
      }
    });
    return idx;
  }
  deleteDepart2(dino):void{
   let idx : number = this.getFine(dino);
   alert(idx);
   this.diList.splice(idx, 1);
  }
  printDepartInfo(){
    console.log(this.di);
  }
  changeShow():void{
    //this.isShow = this.isShow ? false : true;
    /*if(this.isShow){
      this.isShow = false;
      this.button = "보기";
    }else{
      this.isShow = true;
      this.button = "안보기";
    }*/

    this.isShow = !this.isShow;
    this.btnStr = "보기";
    if(this.isShow){
      this.btnStr = "안보기";
    }
  }

}
