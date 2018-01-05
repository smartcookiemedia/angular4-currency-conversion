import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-disclaimer-component',
  templateUrl: './disclaimer-component.component.html',
  styleUrls: ['./disclaimer-component.component.sass']
})
export class DisclaimerComponentComponent implements OnInit {
  
  @Output()
  popupClick: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  closePopup(){
  	this.popupClick.emit(true);
  }

}
