import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './pagues/login/admin/admin.component';
import { DocComponent } from './pagues/login/doc/doc.component';

import { AdminsComponent } from './pagues/administrador/admins/admins.component';
import { DocsComponent } from './pagues/administrador/docs/docs.component';
import { EstsComponent } from './pagues/administrador/ests/ests.component';
import { ConsestComponent } from './pagues/administrador/consest/consest.component';

import { EstComponent } from './pagues/login/est/est.component';
import { LoginComponent } from './pagues/login/login/login.component';
import { RegtComponent } from './pagues/login/regt/regt.component'

import { EditdocComponent } from './pagues/docente/editdoc/editdoc.component';
import { ProyectsComponent } from './pagues/docente/proyects/proyects.component';

import { EditestComponent } from './pagues/estudiante/editest/editest.component';
import { ProyectComponent }from './pagues/estudiante/proyect/proyect.component';

import { HomeComponent } from './pagues/home/home.component';

const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'admin/:id', component: AdminComponent},
  {path: 'admins/:id', component: AdminsComponent},
  {path: 'doc/:id', component: DocComponent},
  {path: 'edoc/:id', component: EditdocComponent},
  {path: 'eest/:id', component:EditestComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'est/:id', component: EstComponent},
  {path: 'ests', component: EstsComponent},
  {path: 'proyt', component:ProyectComponent},
  {path: 'pryts', component:ProyectsComponent},
  {path: 'contest',component:ConsestComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro',component:RegtComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
@NgModule({
  imports: [
   RouterModule.forRoot( routes) 
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
