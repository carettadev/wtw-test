import { Component, Inject } from "@angular/core";
import { Policy } from "../types/policy.type";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-policy-dialog",
  templateUrl: "./add-policy-dialog.component.html",
  styleUrls: ["./add-policy-dialog.component.css"]
})
export class AddPolicyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddPolicyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Policy
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  addPolicy(policy): void {
    this.dialogRef.close(policy);
  }
}
