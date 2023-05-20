import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css']
})
export class CurrencyConvertorComponent implements OnInit {

  countries : any= [];
  displayedCountries : any = [];
  fromCountry: any;
  toCountry: any;
  conversionRate: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json').subscribe((data  :any) => {
      this.countries = data//Object.keys(data);
      // this.displayedCountries = this.countries.map((country : any) => data[country] || country);

    });
  }

  convertCurrency() {
    if (this.fromCountry && this.toCountry) {
      let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.fromCountry}/${this.toCountry}.json`;
      this.http.get(url).subscribe((data : any) => {
        this.conversionRate = data[this.toCountry];
      });
    }
  }
}
