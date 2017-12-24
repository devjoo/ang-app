import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-test',
  templateUrl: './func-test.component.html',
  styleUrls: ['./func-test.component.css']
})
export class FuncTestComponent implements OnInit {
  title : string = "함수 테스트";
  constructor() { }

  ngOnInit() {
  }
  funcTest1():void{
    test(this.title);
    function test(title:string):void{
      alert(title);
    }
  }
  funcTest2():void{
    var title = this.title;
    let test = function():void{
        alert(title);
    }
    try{
      test();
    }catch(e){
      alert(e);
    }
  }
  funcTest3():void{
    let test = function():void{
        alert(this.title);
    }
    test.bind(this)();
  }
  funcTest4():void {
    let test = function():void{
        alert(this.title);
    }
    test.call(this); // 자신을 바인딩시키면서 호출까지 해주는 것
  }
  funcTest5():void{
    let test = ()=>{
      alert(this.title);
    }
    test();
  }
  /*funcTest2():void{
    let test;
    try{
      test();
      test = function(){
        alert(1);
      }
    }catch(e){
      alert(e);
      test = function(){
        alert(1);
      }
    }
    test();
  }*/

}
