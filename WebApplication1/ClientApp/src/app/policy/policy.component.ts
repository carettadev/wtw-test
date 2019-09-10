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

@Component({
  selector: "app-policy",
  templateUrl: "./policy.component.html",
  styleUrls: ["./policy.component.css"]
})
export class PolicyComponent implements OnInit {
  @Input() policy: Policy;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() saveChanges: EventEmitter<Policy> = new EventEmitter();
  public policyForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.policyForm = new FormGroup({
      policyNumber: new FormControl("", [Validators.required]),
      policyHolderName: new FormControl("", [Validators.required]),
      policyHolderAge: new FormControl("", [Validators.required]),
      policyHolderGender: new FormControl("", [Validators.required])
    });
  }

  save($event) {
    console.log(this.policy);
    this.saveChanges.emit(this.policy);
  }
}
