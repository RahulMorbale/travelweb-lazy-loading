import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    


    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
