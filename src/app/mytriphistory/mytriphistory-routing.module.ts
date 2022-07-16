import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../travel/pagenotfound/pagenotfound.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { CompletedComponent } from './completed/completed.component';
import { MytripComponent } from './mytrip/mytrip.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: 'cancelled', component: CancelledComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'mytrip', component: MytripComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: '', redirectTo: 'mytrip',pathMatch:'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytriphistoryRoutingModule { }
