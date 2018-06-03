import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('fatherListent') tellFathOpenNav: EventEmitter<any> = new EventEmitter();
  @Output('isDarkChange') isDarkChange: EventEmitter<any> = new EventEmitter();
  @Input() isDark = false;
  constructor() {

  }

  ngOnInit() {
  }

  open() {
    this.tellFathOpenNav.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onChange(event) {
    this.isDarkChange.emit(event.checked);
  }

}
