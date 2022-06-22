import { Component, OnInit } from '@angular/core';
import {StationsService} from "../stationsService/stations.service";

@Component({
  selector: 'app-indicateur-station',
  templateUrl: './indicateur-station.component.html',
  styleUrls: ['./indicateur-station.component.css']
})
export class IndicateurStationComponent implements OnInit {

  constructor(public stationService: StationsService) { }

  ngOnInit(): void {

  }

}
