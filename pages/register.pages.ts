import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
  loginInput: Locator;
  passwordInput: Locator;
  titlePage: String;
  register: Locator;
  continueButton: Locator;
  FirstName: string;
  LastName: string;
  Email: string;
  Telephone: string;
  Fax: string;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
  }
  async openMainPage(): Promise<void> {
    await this.page.goto("https://automationteststore.com");

    //await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }
  async clickRegisterButon(): Promise<void> {
    await this.register.click();
  }
  async firstNameField(): Promise<void> {
    await this.page.locator("#AccountFrm_firstname").fill("Janusz");
  }
}
