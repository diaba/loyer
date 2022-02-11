import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocataireComponent } from './locataire/locataire.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddLocataireComponent } from './locataire/add-locataire/add-locataire.component';
import { DeleteLocataireComponent } from './locataire/delete-locataire/delete-locataire.component';
import { ViewLocataireComponent } from './locataire/view-locataire/view-locataire.component';
import { ListLocatairesComponent } from './locataire/list-locataires/list-locataires.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 

import {HttpClientModule} from '@angular/common/http';
import { EditLocataireComponent } from './locataire/edit-locataire/edit-locataire.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { MaisonComponent } from './maison/maison/maison.component';

@NgModule({
  declarations: [
    AppComponent,
    LocataireComponent,
    HeaderComponent,
    HomeComponent,
    AddLocataireComponent,
    DeleteLocataireComponent,
    ViewLocataireComponent,
    ListLocatairesComponent,
    SidenavComponent,
    EditLocataireComponent,
    MaisonComponent
  ],
  imports: [
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration:2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
