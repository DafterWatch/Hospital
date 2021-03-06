import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistromedicoComponent } from './registromedico/registromedico.component';
import { SacarfichasComponent } from './sacarfichas/sacarfichas.component';
import { VerfichasComponent } from './verfichas/verfichas.component';

const routes: Routes = [
  { path: '', redirectTo: 'paginaPrincipal', pathMatch: 'full'},
  { path: 'paginaPrincipal', component: PaginaprincipalComponent },
  { path: 'sacarFichas', component: SacarfichasComponent },
  { path: 'verFichas', component: VerfichasComponent },
  { path: 'inicioSesion', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registroMedico', component: RegistromedicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
