import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/cardModel';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: CardModel[] = [];
  backup: CardModel[] = [];

  region: string = '';
  search: string = '';

  onDarkModeBg: string = '';
  onDarkModeEl: string = '';

  @Input() isDarkMode: boolean = false;

  constructor(cardService: CardService) {
    this.cards = cardService.getCards();
    this.backup = cardService.getCards();
  }

  ngOnInit(): void {}

  filterByRegion() {
    if (this.region == '') this.cards = this.backup;
    else this.cards = this.backup.filter((card) => card.region == this.region);
  }

  filterBySearch() {
    this.cards = this.backup.filter((card) =>
      card.name.toLowerCase().startsWith(this.search.toLowerCase())
    );
  }

  darkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.onDarkModeBg = 'dark-mode';
      this.onDarkModeEl = 'dark-mode-el dark-search';
    } else {
      this.onDarkModeBg = 'light';
      this.onDarkModeEl = '';
    }
  }
}
