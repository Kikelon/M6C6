import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMDComponent } from './formulario-md.component';

describe('FormularioMDComponent', () => {
  let component: FormularioMDComponent;
  let fixture: ComponentFixture<FormularioMDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
