import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfeTarjetaComponent } from './pages/profe-tarjeta/profe-tarjeta.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

const routes: Routes = [
  {path: 'profesores',component: ProfesoresComponent},
  {path: 'profesor',component: ProfeTarjetaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'profesores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
