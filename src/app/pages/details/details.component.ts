import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailModel } from 'src/app/models/detailModel';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: DetailModel[] = []
  private code: string | null = ''

  flag: string = '';
  name: string = '';
  nativeName: string = '';
  population: number = 0;
  region: string = '';
  subRegion: string = '';
  capital: string = '';
  topLevelDomain: string[] = [];
  currencies: string[] = [];
  languages: string[] = [];
  borders: string[] = [];


  constructor(detailService: DetailService, private route: ActivatedRoute) {
    this.details = detailService.getAllDetails();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.code = value.get("code")
    )

    this.setValueToComponents(this.code)
  }

  ngDoCheck(): void {
    this.route.paramMap.subscribe(value =>
      this.code = value.get("code")
    )

    this.setValueToComponents(this.code)
  }

  setValueToComponents(code:string | null) {
    const result = this.details.filter( country => country.code == code)[0]

    console.log(result);


    this.flag = result.flag;
    this.name = result.name;
    this.nativeName = result.nativeName;
    this.population = result.population;
    this.region = result.region;
    this.subRegion = result.subRegion;
    this.capital = result.capital;
    this.topLevelDomain = result.topLevelDomain;
    this.currencies = result.currencies;
    this.languages = result.languages;
    this.borders = result.borders;
  }

}
