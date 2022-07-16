import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightbookingRoutingModule } from './flightbooking-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';


@NgModule({
  declarations: [
    FlightdetailsComponent,
    FlightsearchComponent
  ],
  imports: [
    CommonModule,
    FlightbookingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    MatExpansionModule,
    
  ]
})
export class FlightbookingModule { }
