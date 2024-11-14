import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

const authFile = "src/config/auth.json";

test("simple login test", async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername("standard_user");
  await loginPage.fillPassword("secret_sauce");

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectProductTitleToBeVisible();
}); 
