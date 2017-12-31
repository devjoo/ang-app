import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Depart } from '../depart/depart';
import{DepartUpdateService} from './depart-update.service';

@Component({
  selector: 'app-depart-update',
  templateUrl: './depart-update.component.html',
  styleUrls: ['./depart-update.component.css'],
  providers:[DepartUpdateService]
})
export class DepartUpdateComponent implements OnInit {
  @Input() duDiNo :number;
  @Output() duVisible = new EventEmitter<boolean>(); //boolean값을 전달할 EventEmitter
  @Output() duCase = new EventEmitter<string>();
  di:Depart= new Depart();
  constructor(private dus:DepartUpdateService) {
  }

  ngOnInit() {
    alert(this.duDiNo);
    this.dus.getDepart(this.duDiNo).subscribe(
      res=>{
        console.log(res.json());
        this.di = res.json()[0];
      }
    )
  }

  /*updateDepart():void{
    this.dus.updateDepart(this.di).subscribe(
      res=>{
        console.log(res.json());
      }
    );
    this.close();
  }
  close():void{
    this.duVisible.emit(false); //childVisible이라는 이벤트를 보낸다.
  }
*/

  close():void{
    alert(this.duDiNo);
    this.duCase.emit("close");
  }
  updateDepart():void{
    this.dus.updateDepart(this.di).subscribe(
      res=>{
        console.log(res.json());
        var result = res.json();
        if(result.succeed=="ok"){
          alert("정상적으로 수정되었습니다.");
          this.duCase.emit("reload");
        }else{
          alert("디파트 정보 수정이 실패하였습니다.");
        }
      }
    )
  }

}
