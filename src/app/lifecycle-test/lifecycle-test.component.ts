import { Component, OnInit, OnDestroy, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  templateUrl: './lifecycle-test.component.html',
  styleUrls: ['./lifecycle-test.component.css']
})
export class LifecycleTestComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title:string;
  @Output() childVisible = new EventEmitter<boolean>();

  seq:number = 1;
  constructor() {
    console.log("클래스 초기화" + this.seq++);
  }

  ngOnInit() {
    console.log("컴포넌트 초기화" + this.seq++);
  }
  ngOnDestroy(){//아예 메모리에서 삭제 : display:none과 다름
    console.log("컴포넌트 종료" + this.seq++);
  }
  ngOnChanges(chages:{[propertyName: string]: SimpleChange}){
    console.log("값이 바뀔때" + this.seq++);
    for(let pName in chages){
      let chng = chages[pName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${pName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  viChange(b:boolean):void{
    this.childVisible.emit(b);
  }

}
