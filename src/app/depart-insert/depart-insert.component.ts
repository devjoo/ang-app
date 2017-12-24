import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Depart } from '../depart/depart';

@Component({
  selector: 'app-depart-insert',
  templateUrl: './depart-insert.component.html',
  styleUrls: ['./depart-insert.component.css'] // 배열 오바라이딩(재정의)
})
export class DepartInsertComponent implements OnInit {
  //@Input() visible : boolean = true; // 값을 받은거지 visible변수를 받은건 아님
  @Input() title : string;
  @Output() childVisible = new EventEmitter<boolean>(); //boolean값을 전달할 EventEmitter
  @Output() childDi = new EventEmitter<Depart>();
  di:Depart;

  constructor() {
    this.di = new Depart();
  }

  ngOnInit() {
  }

  addDepart():void{
    console.log(this.di);
    this.childDi.emit(this.di);
    this.close();
  }

  close():void{
    this.childVisible.emit(false); //childVisible이라는 이벤트를 보낸다.
  }

}
