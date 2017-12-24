import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { DepartComponent } from './depart/depart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartInsertComponent } from './depart-insert/depart-insert.component';
import { FuncTestComponent } from './func-test/func-test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    UserComponent,
    DepartInsertComponent,
    FuncTestComponent
  ],
   // 위 사용하게 될 컴포넌트 모두 등록 
   // 등록해두면 다시 선언할 필요없다
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule,
     ReactiveFormsModule,
     RouterModule.forRoot([
       { path: 'user', component: UserComponent },
       { path: 'test', component: TestComponent },
       { path: 'depart', component: DepartComponent },
       { path: '', component: WelcomeComponent },
       { path: 'functest', component: FuncTestComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
