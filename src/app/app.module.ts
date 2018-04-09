import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatSelectModule,
  MatIconModule,
  DateAdapter,
  MAT_DATE_FORMATS} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './add-event/add-event.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



import { FormsModule } from "@angular/forms";

//Routes
import { RouterModule,Routes } from '@angular/router';


const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'add-event',component:AddEventComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEventComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,FormsModule,MatDialogModule,
    MatButtonModule, MatCheckboxModule,MatCardModule,MatGridListModule,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatSelectModule,MatToolbarModule,MatListModule,MatIconModule,MatTabsModule, MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
