import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TheStationService} from "../the-station-service/the-station.service";
import {Stations} from "../interfaces/stations";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-the-station',
  templateUrl: './the-station.component.html',
  styleUrls: ['./the-station.component.css']
})
export class TheStationComponent implements OnInit {

  private url: SafeResourceUrl = "";

  station: Stations;

  constructor(public theStation: TheStationService, public sanitizer: DomSanitizer) {
    this.station = theStation.station;
  }

  ngOnInit(): void {
      this.station = this.theStation.station;
      this.url =  this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + this.station.city + "&output=embed");
  }

  getUrl(): SafeResourceUrl{
    return this.url;
  }

}
