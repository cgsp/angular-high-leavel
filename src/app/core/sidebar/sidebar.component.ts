import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private items = [
    '项目首页',
  ]

  private dayItems = [
    '日历首页',
    '月视图',
    '周视图',
    '日视图',
  ]
  constructor() { }

  ngOnInit() {
  }

}
