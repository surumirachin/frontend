import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementTabComponent } from './leave-management-tab.component';

describe('LeaveManagementTabComponent', () => {
  let component: LeaveManagementTabComponent;
  let fixture: ComponentFixture<LeaveManagementTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
