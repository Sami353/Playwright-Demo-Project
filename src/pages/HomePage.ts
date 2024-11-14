import { Page, expect } from "@playwright/test";
// import logger from "../utils/LoggerUtil";
// import ContactPage from "./ContactPage";

export default class HomePage {
  private readonly productTitleLocator = "#header_container > div.header_secondary_container > span";

  constructor(private page: Page) {}

  async expectProductTitleToBeVisible() {
    await expect(this.page.locator(this.productTitleLocator)).toHaveText('Products', {
        timeout: 15000,
      });
      
  }
  
}