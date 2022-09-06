import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './componentes/auth/auth-routing.module';
import { NopageFoundComponent } from './componentes/nopage-found/nopage-found.component';
import { PagesRoutingModule } from './componentes/pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: '**', component: NopageFoundComponent }

];

@NgModule({


  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ]
,

exports: [RouterModule]
})
export class AppRoutingModule { }