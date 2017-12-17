import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [ // 사용하게 될 컴포넌트 모두 등록 
    AppComponent,
    UserComponent
  ],
  imports: [ // 등록해두면 다시 선언할 필요없다
    BrowserModule,
     FormsModule,
     HttpModule,
     ReactiveFormsModule,
     RouterModule.forRoot([
       {
         path: 'user',
         component: UserComponent
       }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
