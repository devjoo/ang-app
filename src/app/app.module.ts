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
import { PromiseComponent } from './promise/promise.component';
import { DepartUpdateComponent } from './depart-update/depart-update.component';
import { ParentComponent } from './parent/parent.component';
import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';
import { UserDepartComponent } from './user-depart/user-depart.component';
import { CommonServiceService } from './common/common-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DepartComponent,
    WelcomeComponent,
    UserComponent,
    DepartInsertComponent,
    FuncTestComponent,
    PromiseComponent,
    DepartUpdateComponent,
    ParentComponent,
    LifecycleTestComponent,
    UserDepartComponent
  ],
   // 위 사용하게 될 컴포넌트 모두 등록 
   // 등록해두면 다시 선언할 필요없다
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule,
     ReactiveFormsModule,
     RouterModule.forRoot([
       { path: 'userdepart', component: UserDepartComponent },
       { path: 'test', component: TestComponent },
       { path: 'depart', component: DepartComponent },
       { path: '', component: WelcomeComponent },
       { path: 'functest', component: FuncTestComponent },
       { path: 'promise', component: PromiseComponent },
       { path: 'parent', component: ParentComponent }
     ])
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
