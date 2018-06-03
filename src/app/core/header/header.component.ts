import { environment } from './../../../environments/environment';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('fatherListent') tellFathOpenNav: EventEmitter<any> = new EventEmitter();
  @Output('isDarkChange') isDarkChange: EventEmitter<any> = new EventEmitter();
  @Input() isDark;
  constructor() {

  }

  ngOnInit() {
    // console.log('子组件初始化了')
  }

  open() {
    this.tellFathOpenNav.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onChange(event) {
    this.isDarkChange.emit(event.checked);
    environment.isDarkTheme = event.checked;
  }

}
