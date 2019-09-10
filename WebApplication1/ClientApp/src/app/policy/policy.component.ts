import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  SimpleChange
} from "@angular/core";
import { Policy } from "../types/policy.type";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-policy",
  templateUrl: "./policy.component.html",
  styleUrls: ["./policy.component.css"]
})
export class PolicyComponent implements OnInit {
  @Input() policy: Policy;
  @Input() addPolicy: boolean;
  @Input() primaryButtonText: string = "OK";
  @Input() secondaryButtonText: string = "Cancel";
  @Output() primaryClick: EventEmitter<Policy> = new EventEmitter();
  @Output() secondaryClick: EventEmitter<Policy> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  primaryButtonClicked(policyForm) {
    if (policyForm.valid) {
      console.log(this.policy);
      this.primaryClick.emit(this.policy);
    } else {
      this.showMessage("Data entered is invalid.");
    }
  }

  secondaryButtonClicked(policyForm) {
    this.secondaryClick.emit(this.policy);
  }

  showMessage(message: string) {
    this._snackBar.open(message, "Dismiss", {
      duration: 2000
    });
  }
}
