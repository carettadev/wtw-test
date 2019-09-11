import {
  browser,
  by,
  element,
  ExpectedConditions,
  ElementFinder
} from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  waitForElement(element: ElementFinder) {
    var until = ExpectedConditions;
    browser.wait(
      until.presenceOf(element),
      5000,
      "Element taking too long to appear in the DOM"
    );
  }

  waitForPageToLoad() {
    this.waitForElement(this.getFirstPolicyInList());
  }

  getPolicyListContainer() {
    return element(by.tagName("app-policy-list"));
  }

  getPolicyList() {
    return this.getPolicyListContainer().all(by.tagName("app-policy"));
  }

  getFirstPolicyInList() {
    return element(by.tagName("app-policy"));
  }

  getAddNewButton() {
    return element(by.css(".jsAddButton"));
  }

  getAddPolicyDialog() {
    return element(by.css(".jsAddPolicyPopUp"));
  }

  getAddPolicyNumberInput() {
    return this.getAddPolicyDialog().element(by.css(".jsPolicyNumberInput"));
  }

  getAddPolicyHolderNameInput() {
    return this.getAddPolicyDialog().element(by.css(".jsPolicyNameInput"));
  }

  getAddPolicyHolderAgeInput() {
    return this.getAddPolicyDialog().element(by.css(".jsPolicyAgeInput"));
  }

  getAddPolicyHolderGenderInput() {
    return this.getAddPolicyDialog().element(by.css(".jsPolicyGenderInput"));
  }

  getAddPolicyHolderGenderInputOptions() {
    return this.getAddPolicyHolderGenderInput().all(by.css("option"));
  }

  getAddPolicyHolderAddButton() {
    return this.getAnyPolicyPrimaryButton(this.getAddPolicyDialog());
  }

  getAddPolicyHolderCancelButton() {
    return this.getAnyPolicySecondaryButton(this.getAddPolicyDialog());
  }

  getAnyPolicyPrimaryButton(policy: ElementFinder) {
    return policy.element(by.css(".jsPrimaryButton"));
  }

  getAnyPolicySecondaryButton(policy: ElementFinder) {
    return policy.element(by.css(".jsSecondaryButton"));
  }

  getPolicyCardWithPolicyNumber(policyNumber: string): ElementFinder {
    return element(
      by.xpath("//app-policy[@data-target='policy" + policyNumber + "']")
    );
  }
}
