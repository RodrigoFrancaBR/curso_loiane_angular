import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarUserComponent } from './pesquisar-user.component';

describe('PesquisarUserComponent', () => {
  let component: PesquisarUserComponent;
  let fixture: ComponentFixture<PesquisarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
