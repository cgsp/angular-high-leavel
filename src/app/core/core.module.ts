import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在了，不能重复加载了');
    }
  }
}
