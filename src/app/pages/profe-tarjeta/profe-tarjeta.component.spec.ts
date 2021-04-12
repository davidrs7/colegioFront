import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeTarjetaComponent } from './profe-tarjeta.component';

describe('ProfeTarjetaComponent', () => {
  let component: ProfeTarjetaComponent;
  let fixture: ComponentFixture<ProfeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfeTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
