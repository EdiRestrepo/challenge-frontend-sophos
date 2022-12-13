import  swal  from 'sweetalert2';
import { AffiliateService } from './../affiliate.service';
import { Affiliate } from './../affiliate';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-affiliate',
  templateUrl: './actualizar-affiliate.component.html',
  styleUrls: ['./actualizar-affiliate.component.css']
})
export class ActualizarAffiliateComponent implements OnInit {

  id:number;
  affiliate:Affiliate = new Affiliate();
  constructor(private affiliateService:AffiliateService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.affiliateService.obtenerAffiliatePorId(this.id).subscribe(dato=>{
      this.affiliate = dato;
    }, error => console.log(error));
  }

  irAListaDeAffiliates(){
    this.router.navigate(['/affiliates']);
    swal('Affiliate updated',`The Affiliate ${this.affiliate.name} has been updated`,`success`);
  }

  onSubmit(){
    this.affiliateService.actualizarAffiliate(this.affiliate).subscribe(dato => {
      this.irAListaDeAffiliates();
    },error => console.log(error));
  }

}
