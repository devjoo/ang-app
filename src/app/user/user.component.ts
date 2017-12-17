import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { User } from './user';
//import { UserHis } from './user-his';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserDataService]
})
export class UserComponent implements OnInit { // implements: 구현 OnInit:설계서
  userList: Array<User>=[];
  searchUser:User = new User();
  errMsg:string = '';

  constructor(private uds : UserDataService) {// UserComponent 실행하는 순간 자동으로 실행되는 생성자
   //alert('허허 나불렀어?');
   this.getUsers();
  }
  //ng serve -p 80
  getUsers():void{
    this.uds.getUsers(this.searchUser).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas['list'];
      },
      error => {
        this.errMsg = <any>error;
        alert(this.errMsg);
      });
  }

  ngOnInit() {
  }

}
