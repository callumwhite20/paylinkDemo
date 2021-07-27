import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FizzBuzzComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    FizzBuzzComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
