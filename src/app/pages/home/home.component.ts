import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/cardModel';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: CardModel[] = []

  constructor(cardService: CardService) {
    this.cards = cardService.getCards();
    console.log(this.cards);

  }

  ngOnInit(): void {
  }

}
