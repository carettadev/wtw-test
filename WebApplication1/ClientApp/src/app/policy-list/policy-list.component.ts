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
    this.api.getPolicies().subscribe((data: Policy[]) => {
      console.log(data);
      this.policies = data;
    });
  }

  addPolicy(policy: Policy) {
    this.api.addPolicy(policy).subscribe(
      (data: Policy[]) => {
        console.log(data);
        this.policies = data;
        this.showMessage("Successfully added");
      },
      err => {
        console.log(err);
        this.showMessage("Error occured");
      }
    );
  }

  savePolicy(policy: Policy) {
    this.api.updatePolicy(policy).subscribe(
      (data: Policy[]) => {
        console.log(data);
        this.policies = data;
        this.showMessage("Successfully updated");
      },
      err => {
        console.log(err);
        this.showMessage("Error occured");
      }
    );
  }

  deletePolicy(policy: Policy) {
    this.api.deletePolicy(policy.policyNumber).subscribe(
      (data: Policy[]) => {
        console.log(data);
        this.policies = data;
        this.showMessage("Successfully deleted");
      },
      err => {
        console.log(err);
        this.showMessage("Error occured");
      }
    );
  }

  showMessage(message: string) {
    this._snackBar.open(message, "Dismiss", {
      duration: 2000
    });
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
      console.log("The dialog was closed");
      //this.animal = result;
    });
  }
}
