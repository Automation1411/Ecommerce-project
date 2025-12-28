// authhelper.ts
import { Login } from '@pages/logins';
import { Page } from '@playwright/test';

export const loginhelp = async (page: Page) => {
  const hrmlogin = new Login(page);
  await hrmlogin.open();
  await hrmlogin.enterusername("Admin");
  await hrmlogin.enteremail("admin123");
  await hrmlogin.loginbuttonclick();
};
