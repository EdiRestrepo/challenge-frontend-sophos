import { AffiliateService } from './../affiliate.service';
import { Affiliate } from './../affiliate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-affiliate-detalles',
  templateUrl: './affiliate-detalles.component.html',
  styleUrls: ['./affiliate-detalles.component.css']
})
export class AffiliateDetallesComponent implements OnInit {

  id:number;
  affiliate:Affiliate;
  constructor(private route:ActivatedRoute, private affiliateServicio:AffiliateService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.affiliate = new Affiliate();
    this.affiliateServicio.obtenerAffiliatePorId(this.id).subscribe(dato=>{
      this.affiliate = dato;
      swal(`Detalles del affilate ${this.affiliate.name}`);
    });
  }

}
