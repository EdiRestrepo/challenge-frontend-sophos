import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Affiliate } from './affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  //Esta URL Obtiene el listado de todos los Affiliates en el backend

  private baseURL = "http://localhost:8090/api/controller/affiliates";

  constructor(private httpClient : HttpClient ) { }

  //este metodo nos sirve para obtener los affiliates
  obtenerListaDeAffiliates():Observable<Affiliate[]>{
    return this.httpClient.get<Affiliate[]>(`${this.baseURL}`);
  }

  //Este metodo nos sirve para registrar un affiliate
  registrarAffiliate(affiliate:Affiliate):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,affiliate);
  }

  //este metodo sirve para actualizar el empleado
  actualizarAffiliate(affiliate:Affiliate):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,affiliate);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerAffiliatePorId(id:number):Observable<Affiliate>{
    return this.httpClient.get<Affiliate>(`${this.baseURL}/${id}`);
  }

  eliminarAffiliate(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
