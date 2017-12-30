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

  parentVisible : boolean = false;
  visible : boolean = false;
  visible2 : boolean = false;
  subTitle :string = this.title + "추가";
  subTitle2 :string = this.title + "추가";
  diNo : string = "";
  duDiNo:number;
  
  constructor(private dis:DepartService) {
    this.di = new Depart();  // 메모리에 생성해야 사용할수있다
  }

  ngOnInit() {
  }
  toggleDepartInsert(v:boolean){
    this.visible = v;
  }
  addDepart(di:Depart):void{
    this.dis.addDepartPost(di).subscribe( //subscribe 요청하고 나서 풀어주는것
      datas => {
        let result = datas.json();

        if(result.succeed=="ok"){
          alert("부서추가가 정상적으로 성공하였습니다.");
          this.showDepartList();
        }else{
          alert("부서추가가 실패하였습니다.");
        }
        //this.di = result.di;
        //console.log(result.di);
        console.log(result);
      }
    );
  }

  updateDepart(di:Depart):void{
    this.dis.addDepartPost(di).subscribe( //subscribe 요청하고 나서 풀어주는것
      datas => {
        let result = datas.json();

        if(result.succeed=="ok"){
          alert("부서 수정이 정상적으로 성공하였습니다.");
          this.showDepartList();
        }else{
          alert("부서 수정이 실패하였습니다.");
        }
        console.log(result);
      }
    );
  }

  showDepartList():void{
  this.dis.getDepartList(this.diNo).subscribe(
      datas =>{
        console.log(datas.json());
        this.diList = datas.json();
      }
    );
    //this.diList = this.dis.getDepartList();
  }
  deleteDepart(item):void{
    var index = this.diList.indexOf(item);
    this.diList.splice(index, 1);
  }
  getFine(diNo):number{
    let idx : number = -1;
    this.diList.forEach((di, index)=>{
      console.log(di.diNo + ',' + diNo);
      if(di.diNo==diNo){
        idx =  index;
      }
    });
    return idx;
  }
  deleteDepart2(di:Depart):void{
   this.dis.deleteDepartPost(di).subscribe(
    datas =>{
      var result = datas.json();
      if(result.error){
        alert(result.error.msg);
      }else{
        alert("삭제 잘했어유~~");
        this.showDepartList();
      }
    }
  );
   //this.diList.splice(idx, 1);
  }
  /*printDepartInfo(){
    console.log(this.di);
  }*/
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

  duVisible(v:boolean):void{
    this.visible2 = v;
  }
  openView(di:Depart):void{
    this.duDiNo = di.diNo;
    this.duVisible(true);
  }
}
