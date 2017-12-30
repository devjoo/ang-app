# Ang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


```
npm config set cache d:\ts2\npm-cache
cd works                                    < works 작업 디렉토리로 가서
npm init -y                                 < package.json파일 생성
npm install -g @angular/cli       < 안전한 버전으로 설치

ng new ang < 프로젝트 생성
cd ang
code .
```

## dependencies , devDependencies

npm 자동 인스톨 

ng serve < 서버실행 카르마

## app.module.ts
@ < 디펜던시인젝션 (의존성 주입)
```
var a = function(){
    this.a = 3;
}
function test(){
    var a = new a();
}
```

## 단위 테스트 jasmin, Karma 
```
ng test
```

## 서버 80포트로 변경하여 실행
```
ng serve -p 80
```

## ng generate component User 하면 파일 4개가 생성되고 하나 업데이트
```
D:\ts2\works\ang>ng generate component User
  create src/app/user/user.component.html (23 bytes)
  create src/app/user/user.component.spec.ts (614 bytes)
  create src/app/user/user.component.ts (261 bytes)
  create src/app/user/user.component.css (0 bytes)
  update src/app/app.module.ts (448 bytes)
  ```

  ## test 컴포넌트 생성
  D:\ts2\works\ang>ng generate component test
  create src/app/test/test.component.html (23 bytes)
  create src/app/test/test.component.spec.ts (614 bytes)
  create src/app/test/test.component.ts (261 bytes)
  create src/app/test/test.component.css (0 bytes)
  update src/app/app.module.ts (939 bytes)

### app/app.module.ts 에서 
패스 추가
```
 RouterModule.forRoot([
       {
         path: 'user',
         component: UserComponent
       },
       {
        path: 'test',
        component: TestComponent
      }
```
### app/app.component.html
에 링크 test로 해서 앵커 추가

### 서버 실행 (80포트)
  ng serve -p 80 

### test.ts 파일 생성
  ng generate class Test

  ### Depart 컴포넌트 생성
  ng generate c Depart

  ### Depart 서비스 클래스 생성
  ng g service Depart

  session storage 브라우저 메모리 올라감
  input output 인젝터
  @output : 여기서 생성한 값을 부모에게 전달하겠다.

  #ng generate component Welcome
  Welcome 컴포넌트 생성
  (ng g c Welcome)

  ##app.component.ts
```
  user : User;

  constructor(){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스트";
    sessionStorage.setItem("user",JSON.stringify(this.user));
  }
  ```

  ##welcome/welcome.component.ts
```
import { User } from '../user/user';
...
export class WelcomeComponent implements OnInit {
  user : User;
  constructor() {
    let userStr = sessionStorage.getItem("user");
    alert(userStr);
    this.user = JSON.parse(userStr);
  }
```

#ng g c DepartInsert

#ng g c FuncTest

npm install bootstrap@3 jquery --save
//해서 bootstrap, jqeury 관리자 권한으로설치

bind/call 차이
옵저버패턴 - 