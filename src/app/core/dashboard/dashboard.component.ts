import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDark = environment.isDarkTheme;
  constructor() {
    // console.log('重新加载了');

  }

  ngOnInit() {
  //  console.log('父组件初始化了')
  //  console.log('父组件的属性是',this.isDark)

  }

}
