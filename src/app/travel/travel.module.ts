import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRoutingModule } from './travel-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    UserloginComponent,
    PagenotfoundComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    TravelRoutingModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule
  ],
  exports: [UserloginComponent,
    PagenotfoundComponent,]
})
export class TravelModule { }
