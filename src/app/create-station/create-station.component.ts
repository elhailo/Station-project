import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {StationsService} from "../stationsService/stations.service";
import {rootStation} from "../interfaces/rootStation";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


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
    city: [],
    isActive:[false],
    installationDateTime:[this.dateToday],
    latitude:[],
    longitude:[],
    name: [],
    serialNumber: [],
    version:[],
    userId:["14219ca0-3ae0-4258-ada8-338b442b2537"],
  });


  constructor(private fb: FormBuilder, private stationService: StationsService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.dateToday);
  }



  createStation(){
    let stringDate : string = String(this.createStationForm.get("installationDateTime")?.value);
    this.createStationForm.get("installationDateTime")?.setValue(stringDate);
    let formResult = this.createStationForm.value;
    this.stationService.postStation(formResult);
    this.router.navigateByUrl('');

  }

}
