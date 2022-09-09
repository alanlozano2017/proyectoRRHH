import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonasComponent } from './personas/personas.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NewPersonaComponent } from './personas/new-persona/new-persona.component';
import { EditPersonaComponent } from './personas/edit-persona/edit-persona.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { RolUsuarioComponent } from './usuarios/rol-usuario/rol-usuario.component';
import { NewRolUsuarioComponent } from './usuarios/rol-usuario/new-rol-usuario/new-rol-usuario.component';
import { EditRolUsuarioComponent } from './usuarios/rol-usuario/edit-rol-usuario/edit-rol-usuario.component';
import { ModulosComponent } from './usuarios/modulos/modulos.component';
import { NewModuloComponent } from './usuarios/modulos/new-modulo/new-modulo.component';
import { EditModuloComponent } from './usuarios/modulos/edit-modulo/edit-modulo.component';
import { EditPermisosComponent } from './usuarios/rol-usuario/edit-permisos/edit-permisos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PersonasComponent,
    PagesComponent,
    NewPersonaComponent,
    EditPersonaComponent,
    NewUsuarioComponent,
    EditUsuarioComponent,
    RolUsuarioComponent,
    NewRolUsuarioComponent,
    EditRolUsuarioComponent,
    ModulosComponent,
    NewModuloComponent,
    EditModuloComponent,
    EditPermisosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    PersonasComponent
  ]
})
export class PagesModule { }
