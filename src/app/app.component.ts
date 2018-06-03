import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'app';

  constructor(){
    // console.log('根组件初始化了')
  }

  ngOnInit(){
    // console.log('根组件init了')
  }
}
