import { Injectable } from '@angular/core';
import { CardModel } from '../models/cardModel';

import data from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: CardModel[] = []

  constructor() {
    this.populateCards();
  }

  populateCards() {
    data.forEach(country => {
      this.cards.push(
        {
          flag: country.flags.png,
          name: country.name,
          population: country.population,
          region: country.region,
          capital: country.capital || '',
          code: country.alpha3Code
        }
      )
    })
  }

  getCards() {
    return [...this.cards];
  }
}
