import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {StationsService} from "../stationsService/stations.service";
import {rootStation} from "../interfaces/rootStation";
import {Observable} from "rxjs";


@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})
export class CreateStationComponent implements OnInit {
  stationList: rootStation = {} as any;

  newId: string = "";

  dateToday: string = new Date().toISOString();

  createStationForm: FormGroup = this.fb.group({
    city: ["Livron-sur-drome"],
    isActive:[true],
    installationDateTime:[this.dateToday],
    latitude:[59.4],
    longitude:[41.12],
    name: ["Cardiac frequency v2"],
    serialNumber: ["656454"],
    version:["1.0.3"],
    userId:["14219ca0-3ae0-4258-ada8-338b442b2537"],
  });


  constructor(private fb: FormBuilder, private stationService: StationsService) { }

  ngOnInit(): void {
    console.log(this.dateToday);
  }



  createStation(){
    let stringDate : string = String(this.createStationForm.get("installationDateTime")?.value);
    this.createStationForm.get("installationDateTime")?.setValue(stringDate);

    let formResult = this.createStationForm.value;
    this.stationService.postStation(formResult);
  }

}
