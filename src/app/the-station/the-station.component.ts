import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TheStationService} from "../the-station-service/the-station.service";
import {Stations} from "../interfaces/stations";

@Component({
  selector: 'app-the-station',
  templateUrl: './the-station.component.html',
  styleUrls: ['./the-station.component.css']
})
export class TheStationComponent implements OnInit {

  private idStation: string | null = "";
  station: Stations;

  constructor(private route: ActivatedRoute, public theStation: TheStationService) {
    this.station = theStation.station;
  }


  ngOnInit(): void {
     this.station = this.theStation.station;
      console.log(this.station)
  }

}
