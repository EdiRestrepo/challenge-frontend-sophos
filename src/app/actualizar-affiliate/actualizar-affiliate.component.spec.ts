import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAffiliateComponent } from './actualizar-affiliate.component';

describe('ActualizarAffiliateComponent', () => {
  let component: ActualizarAffiliateComponent;
  let fixture: ComponentFixture<ActualizarAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
