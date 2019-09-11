import { AppPage } from "./app.po";
import { protractor } from "protractor/built/ptor";
import { element, by } from "protractor";

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
    const policy = page
      .getPolicyList()
      .filter((elem, index) => {
        return elem
          .element(by.css(".jsCardTitle"))
          .getText()
          .then(function(text) {
            return text === "Policy Number: 123";
          });
      })
      .get(1);
    expect(policy).toBeDefined();
    //cleanup
    page.getAnyPolicySecondaryButton(policy).click();
  });

  //TODO: Update
  //TODO: Delete
});
