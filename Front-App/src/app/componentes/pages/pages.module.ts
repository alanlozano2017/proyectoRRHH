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
import { PuestosComponent } from './puestos/puestos.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { InformePersonaComponent } from './informes/informe-persona/informe-persona.component';
import { BarChartComponent } from './informes/bar-chart/bar-chart.component';
import { PieChartComponent } from './informes/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './informes/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './informes/radar-chart/radar-chart.component';
import { NgChartsModule } from 'ng2-charts';


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
    EditPermisosComponent,
    PuestosComponent,
    CalificacionesComponent,
    InformePersonaComponent,
    BarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgChartsModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    PersonasComponent,
    PuestosComponent
  ]
})
export class PagesModule { }
