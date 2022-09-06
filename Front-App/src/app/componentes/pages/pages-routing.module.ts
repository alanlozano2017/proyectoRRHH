import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonasComponent } from './personas/personas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'dashboard', component: PagesComponent ,
    children:[
      { path: '', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'personas', component: PersonasComponent }

    ]
  }
  

];

@NgModule({


  imports: [
    CommonModule,
    RouterModule.forRoot(routes)


  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
