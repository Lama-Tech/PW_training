import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
  loginInput: Locator;
  passwordInput: Locator;
  titlePage: String;
  register: Locator
  continueButton: Locator
  
  


  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
    this.passwordInput = this.page.locator("#pass");
    this.titlePage = ("A place to practice your automation skills!");
    this.register = this.page.getByText("Login or register");
    this.continueButton = this.page.getByText("Continue");
  }
async openMainPage(): Promise<void> {
    await this.page.goto("https://automationteststore.com")
    
    //await expect(this.page.title()).resolves.toEqual(this.titlePage);
    
}
  async clickRegisterButon(): Promise<void> {
    await this.register.click()
  }
  //
  async clickContinueButton(): Promise<void> {
    await this.continueButton.click()
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
}