import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { observable, Observable} from "rxjs";
import { catchError, map } from 'rxjs/operators';
import {Stations} from "../interfaces/stations";
import {rootStation} from "../interfaces/rootStation";

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  private stations_api_url: string = "http://ip24.ip-51-161-69.net/api/Station";

  public nbrStation: number = 0;


  constructor(private httpClient: HttpClient) { }

  getAllStation(): Observable<rootStation>{
    return this.httpClient.get<rootStation>(this.stations_api_url);
  }

  postStation(theStation: Stations) {
     this.httpClient.post(this.stations_api_url, theStation).subscribe((result)=>{
       console.log(result);
     })
  }

  refreshStationCount(nbrStation : number): void{
    this.nbrStation = nbrStation;
  }

}


