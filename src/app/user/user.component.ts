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
  addUserObj:User = new User();

  //ng serve -p 80
  constructor(private uds : UserDataService) {// UserComponent 실행하는 순간 자동으로 실행되는 생성자
   console.log('허허 나불렀어?');
   this.getUsers();
  }

  addUser():void{//값 보내지 않을때는 void로 선언해줌
    console.log(this.addUserObj);
    this.uds.addUser(this.addUserObj);
    /*
    let str : string = JSON.stringify(this.addUserObj);
    alert(str);
    */
    // this.addUserObj = new User();
  //  this.addUserObj.userId = '소나기';
  //  this.addUserObj.userName = '이름이';
  //  this.addUserObj.userNo = 3;
  //  this.addUserObj.userPwd = '비번';
  //  this.addUserObj.complete = true;
  //  this.userList.push(this.addUserObj)
  }
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
