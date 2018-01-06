import { Component } from '@angular/core';
import { User } from './user';
import { CommonServiceService } from './common/common-service.service';
import { RooterLink } from './router-link'; //라우터 링크

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';              // 아무것도 안주면  데이터 타입이 any 다
  userList : Array<User> = [];  // 데이터타입을 User로 강제한 배열을 만듬 (제너릭)
  rlList : Array<RooterLink> = []; //라우터 링크
  userName:string = '';
  userAge:number = 0;
  user : User;

  constructor(private css:CommonServiceService){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스트";
    sessionStorage.setItem("user",JSON.stringify(this.user));

    let url = "http://localhost:3000/api/menus";
    this.css.getJSON(url).subscribe(
      res=>{
        this.rlList = res.list;
      }
    );
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
