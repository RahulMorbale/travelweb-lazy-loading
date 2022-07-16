import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytriphistoryRoutingModule } from './mytriphistory-routing.module';
import { CancelledComponent } from './cancelled/cancelled.component';
import { CompletedComponent } from './completed/completed.component';
import { MytripComponent } from './mytrip/mytrip.component';
import { UpcomingComponent } from './upcoming/upcoming.component';


@NgModule({
  declarations: [
    CancelledComponent,
    CompletedComponent,
    MytripComponent,
    UpcomingComponent
  ],
  imports: [
    CommonModule,
    MytriphistoryRoutingModule
  ]
})
export class MytriphistoryModule { }
