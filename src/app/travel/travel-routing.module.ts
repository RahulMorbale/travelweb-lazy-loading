import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  // {path:'',component:HomepageComponent},
  {path:'',component:UserloginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
