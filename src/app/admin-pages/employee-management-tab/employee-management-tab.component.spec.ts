import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementTabComponent } from './employee-management-tab.component';

describe('EmployeeManagementTabComponent', () => {
  let component: EmployeeManagementTabComponent;
  let fixture: ComponentFixture<EmployeeManagementTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagementTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
