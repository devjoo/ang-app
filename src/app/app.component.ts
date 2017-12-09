import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';              // 아무것도 안주면  데이터 타입이 any 다
  userList : Array<User> = [];  // 제너릭
  userName:string = '';
  userAge:number = 0;

  constructor(){
  }

  addUser() : void {
    var user:User = new User();
    user.userName = this.userName;
    user.userAge = this.userAge;
    this.userList.push(user);
  }
  test() : void {
    var user1 : User = new User();
    user1.userName = '동동이';
    user1.userAge = 17;
    this.userList.push(user1);
    var user1 : User = new User();
    user1.userName = '동동이2';
    user1.userAge = 172;
    this.userList.push(user1);
  }
}
