import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TheStationComponent} from "./the-station/the-station.component";
import {StationsComponent} from "./stations/stations.component";
import {CreateStationComponent} from "./create-station/create-station.component";

const routes: Routes = [
  {path: "station-info", component: TheStationComponent,},
  {path: "", component: StationsComponent},
  {path: "create-station", component: CreateStationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
