import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import { PolicyListComponent } from "./policy-list.component";
import { PolicyComponent } from "../policy/policy.component";
import { AddPolicyDialogComponent } from "../add-policy-dialog/add-policy-dialog.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

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
import { PolicyService } from "../policy.service";
import { Observable } from "rxjs/internal/Observable";
import { Policy } from "../types/policy.type";
import { of } from "rxjs";

describe("PolicyListComponent", () => {
  let component: PolicyListComponent;
  let fixture: ComponentFixture<PolicyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PolicyListComponent,
        PolicyComponent,
        AddPolicyDialogComponent
      ],
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
    })
      .overrideComponent(PolicyListComponent, {
        set: {
          providers: [{ provide: PolicyService, useClass: MockPolicyService }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("getPolicies", () => {
    it("should return policies", () => {
      spyOn(component, "handleResponse");
      spyOn(component, "handleError");
      spyOn(component, "showMessage");
      component.getPolicies();
      fixture.detectChanges();
      expect(component.handleResponse).toHaveBeenCalled();
      expect(component.policies.length).toEqual(policyResult.length);
      expect(component.handleError).toHaveBeenCalledTimes(0);
      expect(component.showMessage).toHaveBeenCalledWith(null);
    });
  });

  describe("addPolicy", () => {
    it("should return policies", () => {
      spyOn(component, "handleResponse");
      spyOn(component, "handleError");
      spyOn(component, "showMessage");
      component.addPolicy({
        policyNumber: 654321,
        policyHolder: {
          name: "test2",
          age: 45,
          gender: "1"
        }
      });
      fixture.detectChanges();
      expect(component.handleResponse).toHaveBeenCalled();
      expect(component.policies.length).toEqual(policyResult.length);
      expect(component.handleError).toHaveBeenCalledTimes(0);
      expect(component.showMessage).toHaveBeenCalledWith("Successfully added");
    });
  });

  describe("savePolicy", () => {
    it("should return policies", () => {
      spyOn(component, "handleResponse");
      spyOn(component, "handleError");
      spyOn(component, "showMessage");
      component.savePolicy({
        policyNumber: 654321,
        policyHolder: {
          name: "test2",
          age: 45,
          gender: "1"
        }
      });
      fixture.detectChanges();

      expect(component.handleResponse).toHaveBeenCalled();
      expect(component.policies.length).toEqual(policyResult.length);
      expect(component.handleError).toHaveBeenCalledTimes(0);
      expect(component.showMessage).toHaveBeenCalledWith(
        "Successfully updated"
      );
    });
  });

  describe("deletePolicy", () => {
    it("should return policies", () => {
      spyOn(component, "handleResponse");
      spyOn(component, "handleError");
      spyOn(component, "showMessage");
      component.deletePolicy({
        policyNumber: 654321,
        policyHolder: {
          name: "test2",
          age: 45,
          gender: "1"
        }
      });
      fixture.detectChanges();

      expect(component.handleResponse).toHaveBeenCalled();
      expect(component.policies.length).toEqual(policyResult.length);
      expect(component.handleError).toHaveBeenCalledTimes(0);
      expect(component.showMessage).toHaveBeenCalledWith(
        "Deleted successfully"
      );
    });
  });
});

const policyResult: Policy[] = [
  {
    policyNumber: 123456,
    policyHolder: {
      name: "test1",
      age: 34,
      gender: "0"
    }
  },
  {
    policyNumber: 654321,
    policyHolder: {
      name: "test2",
      age: 45,
      gender: "1"
    }
  }
];
class MockPolicyService {
  public getPolicies(): Observable<Policy[]> {
    return of(policyResult);
  }

  public addPolicy(policy: Policy): Observable<Policy[]> {
    return of(policyResult);
  }

  public updatePolicy(policy: Policy): Observable<Policy[]> {
    return of(policyResult);
  }

  public deletePolicy(policyNumber: number): Observable<Policy[]> {
    return of(policyResult);
  }
}
