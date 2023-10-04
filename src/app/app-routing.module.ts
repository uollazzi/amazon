import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { HomeComponent } from './components/home/home.component';
import { ProdottoDetailComponent } from './components/prodotto-detail/prodotto-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "vetrina", component: ProdottiVetrinaComponent
  },
  {
    path: "carrello", component: CarrelloComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "prodotti/:id", component: ProdottoDetailComponent
  },
  {
    path: "", redirectTo: "/vetrina", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
