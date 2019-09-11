import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddPolicyDialogComponent } from "./add-policy-dialog.component";
import { PolicyComponent } from "../policy/policy.component";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AddPolicyDialogComponent", () => {
  let component: AddPolicyDialogComponent;
  let fixture: ComponentFixture<AddPolicyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPolicyDialogComponent, PolicyComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatGridListModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatSnackBarModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
