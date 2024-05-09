import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai2Component } from './pages/bai2/bai2.component';
import { Bai3Component } from './pages/bai3/bai3.component';
import { Bai4Component } from './pages/bai4/bai4.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai2Component,
    Bai3Component,
    Bai4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
