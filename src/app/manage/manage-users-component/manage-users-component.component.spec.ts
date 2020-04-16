import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersComponentComponent } from './manage-users-component.component';

describe('ManageUsersComponentComponent', () => {
  let component: ManageUsersComponentComponent;
  let fixture: ComponentFixture<ManageUsersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
