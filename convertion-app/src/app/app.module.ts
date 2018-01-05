import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConversionWidgetComponent } from './component/conversion-widget/conversion-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisclaimerComponentComponent } from './component/disclaimer-component/disclaimer-component.component';



@NgModule({
  declarations: [
    AppComponent,
    ConversionWidgetComponent,
    DisclaimerComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
