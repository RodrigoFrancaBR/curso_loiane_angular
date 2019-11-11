import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataInicioComponent } from './input-data-inicio.component';

describe('InputDataInicioComponent', () => {
  let component: InputDataInicioComponent;
  let fixture: ComponentFixture<InputDataInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
