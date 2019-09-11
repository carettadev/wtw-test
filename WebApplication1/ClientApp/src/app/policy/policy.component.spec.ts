import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PolicyComponent } from "./policy.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
  MatDialogModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

describe("PolicyComponent", () => {
  let component: PolicyComponent;
  let fixture: ComponentFixture<PolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyComponent],
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComponent);
    component = fixture.componentInstance;
    component.policy = {
      policyNumber: 123456,
      policyHolder: {
        name: "Test Person",
        age: 34,
        gender: "0"
      }
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("primaryButtonClicked", () => {
    it("should emit value if form valid", () => {
      spyOn(component.primaryClick, "emit");

      component.primaryButtonClicked({ valid: true });

      fixture.detectChanges();

      expect(component.primaryClick.emit).toHaveBeenCalled();
    });

    it("should show message if form invalid", () => {
      spyOn(component, "showMessage");

      component.primaryButtonClicked({ valid: false });

      fixture.detectChanges();

      expect(component.showMessage).toHaveBeenCalledWith(
        "Data entered is invalid."
      );
    });
  });

  describe("secondaryButtonClicked", () => {
    it("should emit value", () => {
      spyOn(component.secondaryClick, "emit");

      component.secondaryButtonClicked({ valid: true });

      fixture.detectChanges();

      expect(component.secondaryClick.emit).toHaveBeenCalled();
    });
  });
});
