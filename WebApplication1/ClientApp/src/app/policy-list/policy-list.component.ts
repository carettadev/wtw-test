import { Component, OnInit, Inject } from "@angular/core";
import { PolicyService } from "../policy.service";
import { Policy } from "../types/policy.type";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { AddPolicyDialogComponent } from "../add-policy-dialog/add-policy-dialog.component";

@Component({
  selector: "app-policy-list",
  templateUrl: "./policy-list.component.html",
  styleUrls: ["./policy-list.component.css"]
})
export class PolicyListComponent implements OnInit {
  policies: Policy[] = [];

  constructor(
    public api: PolicyService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getPolicies();
  }

  getPolicies() {
    this.policies = [];
    this.api.getPolicies().subscribe(data => {
      this.policies = data;
    }, this.handleError);
  }

  addPolicy(policy: Policy) {
    this.api.addPolicy(policy).subscribe(data => {
      this.addPolicyToArray(policy);
      this.showMessage("Added successfully");
    }, this.handleError);
  }

  savePolicy(policy: Policy) {
    this.api.updatePolicy(policy).subscribe(data => {
      this.deletePolicyFromArray(policy);
      this.addPolicyToArray(policy);
      this.showMessage("Updated successfully");
    }, this.handleError);
  }

  deletePolicy(policy: Policy) {
    this.api.deletePolicy(policy.policyNumber).subscribe(data => {
      this.deletePolicyFromArray(policy);
      this.showMessage("Deleted successfully");
    }, this.handleError);
  }

  private deletePolicyFromArray(policy: Policy) {
    this.policies = this.policies.filter(
      p => p.policyNumber != policy.policyNumber
    );
  }

  private addPolicyToArray(policy: Policy) {
    this.policies.push(policy);
    this.policies.sort((a, b) => a.policyNumber - b.policyNumber);
  }

  handleError(err) {
    console.log(err); //TODO: Better error logging required here
    this.showMessage("Error occured");
  }

  showMessage(message: string) {
    if (message) {
      this._snackBar.open(message, "Dismiss", {
        duration: 2000
      });
    }
  }

  openAddPolicyDialog(): void {
    const initPolicy: Policy = {
      policyNumber: null,
      policyHolder: {
        name: null,
        age: null,
        gender: null
      }
    };
    const dialogRef = this.dialog.open(AddPolicyDialogComponent, {
      width: "80%",
      data: initPolicy
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.addPolicy(result);
    });
  }
}
