import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolicyDialogComponent } from './add-policy-dialog.component';

describe('AddPolicyDialogComponent', () => {
  let component: AddPolicyDialogComponent;
  let fixture: ComponentFixture<AddPolicyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolicyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
