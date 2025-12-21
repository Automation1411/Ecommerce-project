import{Page, Locator, expect} from '@playwright/test';

export class login{
  readonly page: Page;
  readonly orangehrm: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;

  constructor(page: Page){
  this.page = page;
  this.orangehrm = page.getByAltText("company-branding");
  this.username = page.locator("input[placeholder='Username']");
  this.password = page.locator("input[placeholder='Password']");
  this.loginbutton = page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button");
  }

  async open(){
 await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

 async verifyorangehrm(){
  await expect(this.orangehrm).toBeVisible();
 }
 async enterusername(uname:string){
 await this.username.fill(uname)
  }
  async enteremail(pwd: string){
    await this.password.fill(pwd)
  }
  async loginbuttonclick(){
    await this.loginbutton.click();
    await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  }
}
