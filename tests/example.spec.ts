import { test, expect, selectors } from "@playwright/test";
import "dotenv/config";
//import {expect, type Locator, type Page } from '@playwright/test';
import { herokuUrl, storeUrl } from "../helpers/data";

// test("basics", async ({ page }) => {
//   await page.goto("/checkboxes");
//   const checkbox1 = page.getByRole("checkbox").first();
//   await expect(checkbox1).toBeVisible();
// });

// test("basics2", async ({ page }) => {
//   await page.goto("/checkboxes");
//   const checkbox2 = page.getByRole("checkbox").last();
//   await expect(checkbox2).toBeVisible();
// });

// test("basics3", async ({ page }) => {
//   await page.goto("/checkboxes");
//   const checkbox1 = page.getByRole("checkbox").first();
//   await expect(checkbox1).toBeVisible();
//   await expect(checkbox1).not.toBeChecked();
// });

// test("basic test checkboxes"),
//   async ({ page }) => {
//     await test.step("open checkboxes page");
//     const checkbox1 = page.getByRole("checkbox").first();
//     await expect(checkbox1).toBeVisible();

//     await test.step("check if checkbox is selected");
//     const checkbox1 = page.getByRole("chexkbox").first();
//     await expect(checkbox1).not.toBeChecked();
//   };

test("login page", async ({ page }) => {
  await test.step("open login page", async () => {
    await page.goto(herokuUrl + "/login");
    const ClassExample = page.locator(".example");
    await expect(ClassExample).toBeVisible();
    await expect(ClassExample).toContainText(
      "This is where you can log into the secure area. Enter"
    );
  });
  await test.step("fill login inputs", async () => {
    const usernameInput = page.locator("#username");
    await usernameInput.fill(process.env.USER as string);
    await expect(usernameInput).toHaveValue(process.env.USER as string);
  });
  await test.step("fill password", async () => {
    const passwordInput = page.locator("#password");
    await passwordInput.fill(process.env.PASSWORD as string);
    await expect(passwordInput).toHaveValue(process.env.PASSWORD as string);
  });
  await test.step("click on login", async () => {
    const LoginButton = page.locator(".radius");
    await LoginButton.click();
  });
});

test("drop down list", async ({ page }) => {
  await page.goto(herokuUrl + "/dropdown");
  const dropdown = page.locator("#dropdown");
  await page.locator("#dropdown").selectOption("1");
});

// test("pom", async({page}) =>
//   { const loginPage new PlaywrightDevPage(page)
//   await loginPage.goto()
//   await loginPage.getStarted()
//   await loginPage.pageObjectModel()

test("hover", async ({ page }) => {
  await page.goto(storeUrl);
  const handle = page.locator(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]'
  );
  await handle.hover();
  await page.waitForTimeout(3000);
  await page.getByRole("link", { name: "T-shirts" }).click();
  await page.waitForTimeout(3000);
});
