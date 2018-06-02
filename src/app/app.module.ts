/*
 * @Author: John.Guan
 * @Date: 2018-06-02 13:07:05
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-06-02 13:16:06
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material';
/*
 * 导入根路由
 */
import { AppRoutingModule } from './app-routing.module';
/*
 * 导入根组件
 */
import { AppComponent } from './app.component';
/*
 * 导入核心模块
 */
import { CoreModule } from './core/core.module';
/*
 * 导入业务模块
 */
import { LoginModule } from './business/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
