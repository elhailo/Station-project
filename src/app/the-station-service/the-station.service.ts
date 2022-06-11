import { Injectable } from '@angular/core';
import {Stations} from "../interfaces/stations";

@Injectable({
  providedIn: 'root'
})
export class TheStationService {

  station: Stations = {
    $id: "",
    id: "",
    city: "",
    isActive: false,
    installationDate: "",
    latitude: 0,
    longitude: 0,
    name: "",
    operatingStateDate: "",
    updateDate: "",
    firmwareVersion: "",
  };

  constructor() { }
}
