import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddLocataireComponent } from './locataire/add-locataire/add-locataire.component';
import { DeleteLocataireComponent } from './locataire/delete-locataire/delete-locataire.component';
import { EditLocataireComponent } from './locataire/edit-locataire/edit-locataire.component';
import { ListLocatairesComponent } from './locataire/list-locataires/list-locataires.component';
import { LocataireComponent } from './locataire/locataire.component';
import { ViewLocataireComponent } from './locataire/view-locataire/view-locataire.component';
import { ListComponent } from './loyer/list/list.component';
import { EditMaisonComponent } from './maison/edit-maison/edit-maison.component';
import { MaisonComponent } from './maison/maison/maison.component';

const routes: Routes = [
  {path :' ', component: AppComponent},
  {path :'locataire', component: LocataireComponent},
  {path :'maison', component: MaisonComponent},
  {path :'editMaison/:id', component: EditMaisonComponent},
  {path :'addLocataire', component: AddLocataireComponent},
  {path :'editLocataire/:id', component: EditLocataireComponent},
  {path :'viewLocataire/:id', component: ViewLocataireComponent},
  {path :'viewLocataires', component: ListLocatairesComponent},
  // {path :'viewLocataires/:id1/assets/:id2', component: ListComponent},
  {path :'viewLoyer', component: ListComponent},
  {path :'deleteLocataire', component: DeleteLocataireComponent},
  {path :'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
