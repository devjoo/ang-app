import { Component, OnInit } from '@angular/core';
import { UserDepart } from './user-depart';
import { Depart } from '../depart/depart';
import { UserDepartService } from './user-depart.service';
import { DepartService } from '../depart/depart.service';

@Component({
  selector: 'app-user-depart',
  templateUrl: './user-depart.component.html',
  styleUrls: ['./user-depart.component.css'],
  providers:[UserDepartService, DepartService]
})
export class UserDepartComponent implements OnInit {
  udList:Array<UserDepart> = [];
  diList:Array<Depart> = [];
  diService : UserDepartService;

  constructor(private uds:UserDepartService, private ds:DepartService) { }
  

  ngOnInit() {
    this.ds.getDepartList("").subscribe(
      res=>{
        this.diList = res.json();
      }
    )
    this.searchUDList();
  }

  searchUDList():void{
    this.uds.getUserDepartList().subscribe(
      res=>{
        this.udList = res.json().list;
      }
    )
  }

  updateUser(ud:UserDepart):void{
    this.uds.updateUserDepart(ud).subscribe(
      datas =>{
        let result = datas.json();

        if(result.succeed=="ok"){
          alert("정상적으로 성공하였습니다.");
        }else{
          alert("수정이 실패하였습니다.");
        }
        console.log(result);
      }
    )
  }

  deleteUser(ud:UserDepart):void{
    this.uds.deleteDepartPost(ud).subscribe(
     datas =>{
       var result = datas.json();
       if(result.error){
         alert(result.error.msg);
       }else{
         alert("삭제 잘했어유~~");
         this.searchUDList();
       }
     }
   );
  }

}
