import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { SharedModule } from './modules/shared/shared.module';
import { environments } from 'src/environments';
import { initializeApp } from 'firebase/app';

import{AngularFireStorageModule}from '@angular/fire/compat/storage';
import{AngularFireModule}from '@angular/fire/compat';
import { CatalogoComponent } from './modules/inicio/pages/catalogo/catalogo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
