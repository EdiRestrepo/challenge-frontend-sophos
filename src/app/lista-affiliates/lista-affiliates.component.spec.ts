import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAffiliatesComponent } from './lista-affiliates.component';

describe('ListaAffiliatesComponent', () => {
  let component: ListaAffiliatesComponent;
  let fixture: ComponentFixture<ListaAffiliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAffiliatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
