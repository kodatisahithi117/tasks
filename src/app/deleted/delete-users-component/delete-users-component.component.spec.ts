import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsersComponentComponent } from './delete-users-component.component';

describe('DeleteUsersComponentComponent', () => {
  let component: DeleteUsersComponentComponent;
  let fixture: ComponentFixture<DeleteUsersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUsersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
