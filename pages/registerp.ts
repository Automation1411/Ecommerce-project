import{Page, Locator} from '@playwright/test';

export class registerform{
  readonly page: Page;
  readonly SignupLogin: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly signupbutton: Locator;

  constructor({page}:{page:Page}){
  this.page = page;
  this.SignupLogin = page.getByRole("link",{name: " Signup / Login"})
  this.name = page.getByPlaceholder("Name");
  this.email = page.locator(".signup-form").getByPlaceholder("Email Address");
  this.signupbutton = page.locator("//div[@class ='signup-form']//button[@class='btn btn-default']");
  }
  async launchUrl(){
    await this.page.goto("/");
  }
  async signin(){
    await this.SignupLogin.click();
  }
  async entername(name:string){
 await this.name.fill(name)
  }
  async enteremail(email: string){
    await this.email.fill(email)
  }
  async signupbuttonclick(){
    await this.signupbutton.click();
  }
}