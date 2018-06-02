/*
 * @Author: John.Guan
 * @Date: 2018-06-02 11:24:16
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-06-02 12:34:27
 */
/*
 * 引入angualr资源
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * 引入angular-material资源
 */
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  declarations: []
})
export class SharedModule { }
