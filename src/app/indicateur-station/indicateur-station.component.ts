import { Component, OnInit } from '@angular/core';
import {StationsService} from "../stationsService/stations.service";

@Component({
  selector: 'app-indicateur-station',
  templateUrl: './indicateur-station.component.html',
  styleUrls: ['./indicateur-station.component.css']
})
export class IndicateurStationComponent implements OnInit {

  nombreStation: number = 0;

  constructor(private stationService: StationsService) { }

  ngOnInit(): void {
    this.stationService.getAllStation().subscribe((data) =>{
      console.log(data)
      this.nombreStation = data.$values.length;
    })
  }

}
