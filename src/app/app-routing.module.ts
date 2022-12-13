import { AffiliateDetallesComponent } from './affiliate-detalles/affiliate-detalles.component';
import { ActualizarAffiliateComponent } from './actualizar-affiliate/actualizar-affiliate.component';
import { RegistrarAffiliateComponent } from './registrar-affiliate/registrar-affiliate.component';
import { ListaAffiliatesComponent } from './lista-affiliates/lista-affiliates.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'affiliates',component:ListaAffiliatesComponent},
  {path : '',redirectTo:'affiliates',pathMatch:'full'},
  {path : 'registrar-affiliate',component : RegistrarAffiliateComponent},
  {path : 'actualizar-affiliate',component : ActualizarAffiliateComponent},
  {path : 'affiliate-detalles/:id',component : AffiliateDetallesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
