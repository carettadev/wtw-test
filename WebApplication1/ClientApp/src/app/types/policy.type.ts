import { PolicyHolder } from "./policy-holder";

export interface Policy {
  policyNumber: string;
  policyHolder: PolicyHolder;
}
