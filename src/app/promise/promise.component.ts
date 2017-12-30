import { Component, OnInit } from '@angular/core';
import { ProLog } from './pro-log';
import { resolve, isRejected, reject } from 'q';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  title:string;
  proLogList:Array<ProLog>;

  constructor() {
    this.title = "프로미스테스트";
    this.proLogList=[];
  }

  setTime(text:string, time:number, func?:Function):void{
    setTimeout(()=>{
      this.setLog(text);
      if(func){
        func();
      }
    }, time);
  };

  logTest():void{
    this.proLogList = [];
    let test1 = ():void=>{
     this.setTime("첫번째", 1500);
    };
    let test2 = ():void=>{
      this.setTime("두번째", 1000);
    };
    let test3 = ():void=>{
      this.setTime("세번째", 4000);
    };
    test1();
    test2();
    test3();
  };

  logTest2():void{
    this.proLogList=[];
    let test1=(func:Function):void=>{
      this.setTime('첫번째',2000,func);
    }
    let test2=(func:Function):void=>{
      this.setTime('두번째',1000,func);
    }
    let test3=(func:Function):void=>{
      this.setTime('세번째',500);
    }
    test1(test2.bind(null,test3));
  };

  getPromise(text:string, time: number, msg?:string):Promise<{}>{
    return new Promise((resolved, rejected)=>{
      setTimeout(()=>{
        if(msg){
          rejected(msg);
        }else{
          this.setLog(text);
          resolved();
        }
      },time);
    })
  }

  logTest3():void{
    this.proLogList=[];
    let test1 = this.getPromise.bind(this, '첫번째', 1500);
    let test2 = this.getPromise.bind(this, '두번째', 500);
    let test3 = this.getPromise.bind(this, '세번째', 1000,'에러났음');
    test1().
    then(test2).
    then(test3).
    then(()=>{
      this.setLog('모두 완료일껄요~');
    }).catch(
      (msg:string)=>{
        this.setLog(msg);
      }
    )
  }

  setLog(text:string){
    let log:ProLog = new ProLog();
    log.num = this.proLogList.length;
    log.text = text;
    this.proLogList.push(log);
  };

  ngOnInit() {
  }

}
