import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pagues/home/home.component';
import { EstComponent } from './pagues/login/est/est.component';
import { EstsComponent } from './pagues/administrador/ests/ests.component';
import { DocComponent } from './pagues/login/doc/doc.component';
import { DocsComponent } from './pagues/administrador/docs/docs.component';
import { AdminComponent } from './pagues/login/admin/admin.component';
import { AdminsComponent } from './pagues/administrador/admins/admins.component';
import { AppRoutingModule } from './app-routing.module';
import { EditdocComponent } from './pagues/docente/editdoc/editdoc.component';
import { EditestComponent } from './pagues/estudiante/editest/editest.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminlistComponent } from './pagues/adminlist/adminlist.component';
import { ProyectComponent } from './pagues/estudiante/proyect/proyect.component';
import { ProyectsComponent } from './pagues/docente/proyects/proyects.component';
import { ConsestComponent } from './pagues/administrador/consest/consest.component';
import { LoginComponent } from './pagues/login/login/login.component';
import { RegtComponent } from './pagues/login/regt/regt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstComponent,
    EstsComponent,
    DocComponent,
    DocsComponent,
    AdminComponent,
    AdminsComponent,
    EditdocComponent,
    EditestComponent,
    AdminlistComponent,
    ProyectComponent,
    ProyectsComponent,
    ConsestComponent,
    LoginComponent,
    RegtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
