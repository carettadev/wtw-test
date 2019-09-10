import { Component, OnInit } from "@angular/core";
import { PolicyService } from "../policy.service";
import { Policy } from "../types/policy.type";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-policy-list",
  templateUrl: "./policy-list.component.html",
  styleUrls: ["./policy-list.component.css"]
})
export class PolicyListComponent implements OnInit {
  policies: Policy[] = [];

  constructor(public api: PolicyService, private _snackBar: MatSnackBar) {}

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

  add() {
    // this.router.navigate(['/product-add']);
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
      }
    );
  }

  deletePolicy(id: number) {
    this.api.deletePolicy(id).subscribe(
      (data: Policy[]) => {
        console.log(data);
        this.policies = data;
        this.showMessage("Successfully deleted");
      },
      err => {
        console.log(err);
      }
    );
  }

  showMessage(message: string) {
    this._snackBar.open(message, "Dismiss", {
      duration: 2000
    });
  }
}
