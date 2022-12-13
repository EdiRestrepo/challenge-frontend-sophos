import { AffiliateService } from './../affiliate.service';
import { Affiliate } from './../affiliate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-affiliate',
  templateUrl: './registrar-affiliate.component.html',
  styleUrls: ['./registrar-affiliate.component.css']
})

export class RegistrarAffiliateComponent implements OnInit {

  affiliate : Affiliate = new Affiliate();
  constructor(private affiliateService:AffiliateService, private router:Router) { }

  ngOnInit(): void {

  }

  guardarAffiliate(){
    this.affiliateService.registrarAffiliate(this.affiliate).subscribe(dato => {
      console.log(dato);
      this.irAListaAffiliates();
    }, error => console.log(error));
  }

  irAListaAffiliates(){
    this.router.navigate(['/affiliates']);
    swal('Affiliate registered',`The affiliate ${this.affiliate.name} has been registered`,`success`);
  }

  onSubmit(){
    this.guardarAffiliate();
  }

}
