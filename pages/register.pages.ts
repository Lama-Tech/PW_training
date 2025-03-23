import { Page, expect, Locator } from "@playwright/test";
import { executionAsyncId } from "async_hooks";

export class RegisterPage {
  loginInput: Locator;
  passwordInput: Locator;
  titlePage: String;
  register: Locator;
  continueButton: Locator;
  firstNameInput: Locator;
  lastName: Locator;
  email: Locator;
  telephone: Locator;
  Fax: Locator;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
    this.firstNameInput = this.page.locator("#AccountFrm_firstname");
    this.lastName = this.page.locator("#AccountFrm_lastname");
    this.email = this.page.locator("#AccountFrm_email");
    this.telephone = this.page.locator("#AccountFrm_telephone");
  }
  async openMainPage(): Promise<void> {
    await this.page.goto("https://automationteststore.com");

    //await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }
  async clickRegisterButon(): Promise<void> {
    await this.register.click();
  }
  async firstNameField(): Promise<void> {
    await this.firstNameInput.fill("Janusz");
    await expect(this.firstNameInput).toHaveValue("Janusz");
  }
  async lastNameField(): Promise<void> {
    await this.lastName.fill("Kowalski");
    await expect(this.lastName).toHaveValue("Kowalski");
  }
  async emailField(): Promise<void> {
    await this.email.fill("b0l3k21@gmail.com");
    await expect(this.email).toHaveValue("b0l3k21@gmail.com");
  }
  async telephoneField(): Promise<void> {
    await this.telephone.fill("555555555");
    await expect(this.telephone).toHaveValue("555555555");
  }
}
