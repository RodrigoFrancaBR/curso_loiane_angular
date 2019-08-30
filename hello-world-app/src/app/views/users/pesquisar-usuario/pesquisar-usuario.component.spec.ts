import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarUsuarioComponent } from './pesquisar-usuario.component';

describe('PesquisarUsuarioComponent', () => {
  let component: PesquisarUsuarioComponent;
  let fixture: ComponentFixture<PesquisarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
