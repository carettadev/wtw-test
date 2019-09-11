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
import { cold, getTestScheduler } from "jasmine-marbles";

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
      spyOn(component, "handleError");
      spyOn(component, "showMessage");
      component.getPolicies();
      getTestScheduler().flush(); // flush the observables
      fixture.detectChanges();
      expect(component.policies.length).toEqual(policyResult.length);
      expect(component.handleError).toHaveBeenCalledTimes(0);
    });
  });

  describe("addPolicy", () => {
    it("should add a policy", () => {
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
      getTestScheduler().flush(); // flush the observables
      fixture.detectChanges();
      expect(component.policies.length).toEqual(3);
      expect(component.handleError).toHaveBeenCalledTimes(0);
      expect(component.showMessage).toHaveBeenCalledWith("Added successfully");
    });
  });

  describe("savePolicy", () => {
    it("should update a policy", () => {
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
      getTestScheduler().flush(); // flush the observables
      fixture.detectChanges();

      expect(component.policies.length).toEqual(2);
      expect(component.handleError).toHaveBeenCalledTimes(0);
      expect(component.showMessage).toHaveBeenCalledWith(
        "Updated successfully"
      );
    });
  });

  describe("deletePolicy", () => {
    it("should remove a policy", () => {
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
      getTestScheduler().flush(); // flush the observables
      fixture.detectChanges();

      expect(component.policies.length).toEqual(1);
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
    const policies$ = cold("--x|", { x: policyResult });
    return policies$;
  }

  public addPolicy(policy: Policy): Observable<Policy> {
    const policies$ = cold("--x|", { x: policy });
    return policies$;
  }

  public updatePolicy(policy: Policy): Observable<Policy> {
    const policies$ = cold("--x|", { x: policy });
    return policies$;
  }

  public deletePolicy(policyNumber: number): Observable<Policy> {
    const policies$ = cold("--x|", { x: true });
    return policies$;
  }
}
