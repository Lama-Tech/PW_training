import { test } from "../Fixtures/base";



test.only("test", async ({ mainPage, loginPage, registerPage}) => {
  await mainPage.openMainPage()
  await mainPage.clickRegisterButon()
  await loginPage.verifyClickRegister()
  await mainPage.clickContinueButton()
  await registerPage.firstNameField()
});
