import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TheStationComponent} from "./the-station/the-station.component";
import {StationsComponent} from "./stations/stations.component";

const routes: Routes = [
  {path: "station-info", component: TheStationComponent,},
  {path: "", component: StationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
