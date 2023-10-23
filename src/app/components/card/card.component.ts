import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() flag: string = '';
  @Input() name: string = '';
  @Input() population: number = 0;
  @Input() region: string = '';
  @Input() capital: string = '';
  @Input() code: string = '';

  onDarkMode: string = '';
  @Input() isDarkMode: boolean = false;

  constructor() {
    if (this.isDarkMode) this.onDarkMode = 'dark-mode';
    else this.onDarkMode = '';
  }

  ngOnInit(): void {}
}
