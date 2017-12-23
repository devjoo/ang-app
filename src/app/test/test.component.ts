import { Component, OnInit } from '@angular/core';
import { Test } from './test';

@Component({
  selector: 'app-test', // 걍 app-test로 해도 된다
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tt:Test;
  title:string = "테스트 컴포넌트입니다.";

  constructor() {
    this.tt = new Test();
    this.tt.name = "홍길동";
    this.tt.title = "테스트 컴포넌트입니다.";
    console.log(this.title);
  }

  ngOnInit() {
  }
  changeTitle():void{
    this.title = "바뀐 테스트 컴포넌트입니다.";
  }

}
