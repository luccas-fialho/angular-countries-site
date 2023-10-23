import { Injectable } from '@angular/core';
import { DetailModel } from '../models/detailModel';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  details: DetailModel[] = [];
  currencies: string[] = [];
  languages: string[] = [];
  borders: string[] = [];

  constructor() {
    data.forEach((country) => {
      this.currencies = [];
      country.currencies?.forEach((currencie) => {
        this.currencies.push(currencie.code);
      });

      this.languages = [];
      country.languages.forEach((language) => {
        this.languages.push(language.name);
      });

      this.borders = [];
      country.borders?.forEach((border) => {
        this.borders.push(border);
      });

      this.details.push({
        code: country.alpha3Code,
        flag: country.flag,
        name: country.name,
        nativeName: country.nativeName,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital || '',
        topLevelDomain: country.topLevelDomain,
        currencies: this.currencies,
        languages: this.languages,
        borders: this.borders,
      });
    });
  }

  getAllDetails() {
    return [...this.details];
  }
}
