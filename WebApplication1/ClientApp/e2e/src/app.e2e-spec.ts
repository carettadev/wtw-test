import { AppPage } from "./app.po";
import { protractor } from "protractor/built/ptor";
import { element, by, browser, ExpectedConditions } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display all policies", () => {
    page.navigateTo();
    page.waitForPageToLoad();
    expect(page.getPolicyList().count()).toBe(7);
  });

  it("should add a new policy", () => {
    page.navigateTo();
    page.waitForPageToLoad();
    page.getAddNewButton().click();
    page.waitForElement(page.getAddPolicyDialog());
    expect(page.getAddPolicyDialog()).toBeDefined();
    page.getAddPolicyNumberInput().sendKeys("123");
    page.getAddPolicyHolderNameInput().sendKeys("test policyholder");
    page.getAddPolicyHolderAgeInput().sendKeys("23");
    page.getAddPolicyHolderGenderInput().click();
    page
      .getAddPolicyHolderGenderInputOptions()
      .get(1)
      .click();
    page.getAddPolicyHolderAddButton().click();
    page.waitForElement(page.getPolicyCardWithPolicyNumber("123"));
    //cleanup
    page
      .getPolicyCardWithPolicyNumber("123")
      .element(by.css(".jsSecondaryButton"))
      .click();
  });

  //TODO: Update
  //TODO: Delete
});
