import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateDetallesComponent } from './affiliate-detalles.component';

describe('AffiliateDetallesComponent', () => {
  let component: AffiliateDetallesComponent;
  let fixture: ComponentFixture<AffiliateDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
