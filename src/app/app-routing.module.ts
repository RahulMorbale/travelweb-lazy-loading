import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './travel/pagenotfound/pagenotfound.component';
import { UserloginComponent } from './travel/userlogin/userlogin.component';

const routes: Routes = [
  {
    path: 'flightbooking',
    loadChildren: () => import('./flightbooking/flightbooking.module').then(m => m.FlightbookingModule)
  },
  {
    path: 'mytriphistory',
    loadChildren: () => import('./mytriphistory/mytriphistory.module').then(m => m.MytriphistoryModule)
  },
  {
    path: 'travel',
    loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // { path: 'maincomponent', component: AppComponent },
  { path: '', component: UserloginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
