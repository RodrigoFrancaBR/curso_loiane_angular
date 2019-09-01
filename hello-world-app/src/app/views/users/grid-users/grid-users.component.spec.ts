import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUsersComponent } from './grid-users.component';

describe('GridUsersComponent', () => {
  let component: GridUsersComponent;
  let fixture: ComponentFixture<GridUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
