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