import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUsuariosComponent } from './grid-usuarios.component';

describe('GridUsuariosComponent', () => {
  let component: GridUsuariosComponent;
  let fixture: ComponentFixture<GridUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
