import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTDComponent } from './formulario-td.component';

describe('FormularioTDComponent', () => {
  let component: FormularioTDComponent;
  let fixture: ComponentFixture<FormularioTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
