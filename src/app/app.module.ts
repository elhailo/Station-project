import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { HttpClientModule } from '@angular/common/http';
import {Stations} from "./interfaces/stations";
import { TheStationComponent } from './the-station/the-station.component';
import { CreateStationComponent } from './create-station/create-station.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IndicateurStationComponent } from './indicateur-station/indicateur-station.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    TheStationComponent,
    CreateStationComponent,
    IndicateurStationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
