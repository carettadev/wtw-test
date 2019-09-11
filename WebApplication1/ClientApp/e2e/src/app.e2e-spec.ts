import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
  });

  it("should open an add policy dialog when clicking add new button", () => {
    page.navigateTo();
    page.getAddButton().click();
  });
});
