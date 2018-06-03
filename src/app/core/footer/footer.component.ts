import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log('foot构造了');
  }

  ngOnInit() {
    console.log('foot初始化了');
  }

}
