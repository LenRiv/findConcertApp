import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { HeaderComponent } from './components/header/header.component';
import { ListConcertComponent } from './components/list-concert/list-concert.component';
import { CardConcertComponent } from './components/card-concert/card-concert.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConcertViewComponent } from './components/concert-view/concert-view.component';
import { C404Component } from './components/c404/c404.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    HeaderComponent,
    ListConcertComponent,
    CardConcertComponent,
    ContactComponent,
    ConcertViewComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
