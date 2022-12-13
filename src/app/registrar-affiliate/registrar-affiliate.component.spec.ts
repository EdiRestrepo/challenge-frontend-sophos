import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAffiliateComponent } from './registrar-affiliate.component';

describe('RegistrarAffiliateComponent', () => {
  let component: RegistrarAffiliateComponent;
  let fixture: ComponentFixture<RegistrarAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
