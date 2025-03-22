import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  loginInput: Locator;


  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
  }

  async verifyClickRegister(): Promise<void> {
    await expect (this.loginInput).toBeVisible()
  }
  //
  async clickLoginButton(): Promise<void> {
    //
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
 // async clicContinueButton(): Promise<void> {
    
}