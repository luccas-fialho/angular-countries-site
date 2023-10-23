import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  onDarkMode: string = '';
  @Output() darkModeClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleDarkMode(e: boolean) {
    this.onDarkMode != ''
      ? (this.onDarkMode = '')
      : (this.onDarkMode = 'dark-mode');
    this.darkModeClicked.emit(e);
  }
}
