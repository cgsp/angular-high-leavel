/*
 * @Author: John.Guan
 * @Date: 2018-06-02 11:24:16
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-06-02 18:52:46
 */
/*
 * 引入angualr资源
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * 引入angular-material资源
 */
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
  ],
  declarations: []
})
export class SharedModule { }
