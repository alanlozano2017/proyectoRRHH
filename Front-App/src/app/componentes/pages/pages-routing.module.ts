import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonasComponent } from './personas/personas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolUsuarioComponent } from './usuarios/rol-usuario/rol-usuario.component';
import { ModulosComponent } from './usuarios/modulos/modulos.component';

const routes: Routes = [
  { path: 'dashboard', component: PagesComponent ,
    children:[
      { path: '', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'rol-usuarios', component: RolUsuarioComponent },
      { path: 'modulos', component: ModulosComponent },

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
