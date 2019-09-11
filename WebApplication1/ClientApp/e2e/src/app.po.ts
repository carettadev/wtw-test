import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getAddButton() {
    return element(by.css(".jsAddButton"));
  }
}
