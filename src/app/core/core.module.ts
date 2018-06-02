/*
 * @Author: John.Guan
 * @Date: 2018-06-02 13:17:50
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-06-02 13:18:31
 */
/*
 * 导入自己组件使用的模块或方法
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg-utils/svg.util';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
 * 导入自己模块的组件
 */
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
/*
 * 导入公用模块
 */
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer,
  ) {
    if (parent) {
      throw new Error('模块已经存在了，不能重复加载了');
    }

    // 调用批量导入svg函数
    loadSvgResources(ir, ds);
  }
}
