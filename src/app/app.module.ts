
/*
 * @Author: John.Guan
 * @Date: 2018-06-02 13:07:05
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-06-03 19:34:00
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ProjectModule } from './business/project/project.module';
import { GspModule } from './business/gsp/gsp.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    GspModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
