import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      name:'企业协作平台1',
      desc:'这是一个企业内部项目1',
      coverImg:'assets/imgs/covers/0.jpg'
    },
    {
      name:'企业协作平台2',
      desc:'这是一个企业内部项目2',
      coverImg:'assets/imgs/covers/1.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
