import { Router } from '@angular/router';
import { Affiliate } from './../affiliate';
import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../affiliate.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-affiliates',
  templateUrl: './lista-affiliates.component.html',
  styleUrls: ['./lista-affiliates.component.css']
})
export class ListaAffiliatesComponent implements OnInit {

  affiliates:Affiliate[];

  constructor(private affiliateServicio:AffiliateService, private router:Router) { }

  ngOnInit(): void {

    this.obtenerAffiliates();
  }

  actualizarAffiliate(affiliate:Affiliate){
    this.router.navigate(['actualizar-affiliate', affiliate]);
  }

  private obtenerAffiliates(){
    this.affiliateServicio.obtenerListaDeAffiliates().subscribe(dato => {
      this.affiliates = dato;
    });
  }

  eliminarAffiliate(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.affiliateServicio.eliminarAffiliate(id).subscribe(dato => {
          console.log(dato);
          this.obtenerAffiliates();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelAffiliate(id:number){
    this.router.navigate(['affiliate-detalles',id]);
  }

}
