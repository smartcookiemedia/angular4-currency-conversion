import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NG_VALIDATORS,Validator,
           Validators,AbstractControl,ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-conversion-widget',
  templateUrl: './conversion-widget.component.html',
  styleUrls: ['./conversion-widget.component.css']
})
export class ConversionWidgetComponent implements OnInit {

  countries: any[];
  selectedCountryFrom: string;
  selectedCountryTo: string;
  currencyFrom: Number;
  currencyTo: string = '';
  fromType: Number;
  toType: Number;
  showHide:boolean;


  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.countries = [
      { name: "CAD" },
      { name: "USD" },
      { name: "EUR" }

    ];

    this.selectedCountryFrom = 'CAD';
    this.selectedCountryTo = 'CAD';
    this.showHide = false;

  }

 /* get selection from */
  onSelectFrom(countryId, currencyFrom) {
    this.selectedCountryFrom = countryId;
    this.currencyFrom = currencyFrom;
    this.getConversion(countryId);

  }
 /* get selection to */
  onSelectTo(countryId, currencyFrom) {
    this.selectedCountryTo = countryId;
    this.currencyFrom = currencyFrom;
    this.getConversion(countryId);

  }

  getConversion(countryId) {
    let url = 'http://api.fixer.io/latest';

    return this.getService(url)
      .then(result => this.doConversion(result.rates))
      .catch(error => alert(error.message));
  }

  doConversion(rates) {
    this.fromType = (typeof rates[this.selectedCountryFrom] === 'undefined') ? 1 : rates[this.selectedCountryFrom];
    this.toType = (typeof rates[this.selectedCountryTo] === 'undefined') ? 1 : rates[this.selectedCountryTo];
    this.currencyFrom = isNaN(this.currencyFrom) ? 1 : this.currencyFrom;
    this.currencyTo = (this.currencyFrom * (this.toType * (1 / this.fromType))).toFixed(4);

  }


  getService(url: string): Promise < any > {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: any): Promise < any > {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  changeShowStatus(){
    this.showHide = !this.showHide;
  }
}
