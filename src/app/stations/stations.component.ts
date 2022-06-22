import { Component, OnInit } from '@angular/core';
import {Stations} from "../interfaces/stations";
import {StationsService} from "../stationsService/stations.service";
import {rootStation} from "../interfaces/rootStation";
import {NavigationExtras, Router} from "@angular/router";
import {TheStationService} from "../the-station-service/the-station.service";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})

export class StationsComponent implements OnInit {

  constructor(private stationService: StationsService, private theStation: TheStationService) { }


  ngOnInit(): void {
    this.showStation();
  }

  stationList: rootStation = {} as any;

  showStation(){
    this.stationService.getAllStation().subscribe((data) =>{
      console.log(data)
      this.stationList = data;
      this.stationService.refreshStationCount(data.$values.length);
    })
  }

  passStation(station: Stations){
    this.theStation.station = station;
  }

}
