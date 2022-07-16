import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';

const routes: Routes = [
  {path:'flightdetails',component:FlightdetailsComponent},
  {path:'flightsearch',component:FlightsearchComponent},
  {path:'',redirectTo:'flightsearch',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightbookingRoutingModule { }
