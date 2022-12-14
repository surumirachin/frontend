import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedleavesComponent } from './approvedleaves.component';

describe('ApprovedleavesComponent', () => {
  let component: ApprovedleavesComponent;
  let fixture: ComponentFixture<ApprovedleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
