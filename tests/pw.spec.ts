import { test } from "../Fixtures/base";
import { storeUrl } from "../helpers/data";

test("test", async ({ mainPage, loginPage, registerPage }) => {
  await mainPage.openMainPage(storeUrl);
  await mainPage.clickRegisterButon();
  await loginPage.verifyClickRegister();
  await mainPage.clickContinueButton();
  await registerPage.firstNameField();
  await registerPage.lastNameField();
  await registerPage.emailField();
  await registerPage.telephoneField();
});
