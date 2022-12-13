import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAffiliatesComponent } from './lista-affiliates/lista-affiliates.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarAffiliateComponent } from './registrar-affiliate/registrar-affiliate.component';
import { FormsModule } from '@angular/forms';
import { ActualizarAffiliateComponent } from './actualizar-affiliate/actualizar-affiliate.component';
import { AffiliateDetallesComponent } from './affiliate-detalles/affiliate-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAffiliatesComponent,
    RegistrarAffiliateComponent,
    ActualizarAffiliateComponent,
    AffiliateDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
