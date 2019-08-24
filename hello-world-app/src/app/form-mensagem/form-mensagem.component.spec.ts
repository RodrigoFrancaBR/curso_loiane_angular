import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMensagemComponent } from './form-mensagem.component';

describe('FormMensagemComponent', () => {
  let component: FormMensagemComponent;
  let fixture: ComponentFixture<FormMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
