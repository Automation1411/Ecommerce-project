import{Page, Locator, expect} from '@playwright/test';

export class registerform{
  readonly page: Page;
  readonly SignupLogin: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly signupbutton: Locator;
  readonly accountinformation: Locator;
  readonly title:Locator;
  readonly accountname: Locator;
  readonly accountemail: Locator;
  readonly accountpassword : Locator;
  readonly accountdobdate : Locator;
  readonly accountdobmonth : Locator;
  readonly accountdobyears : Locator;


  constructor({page}:{page:Page}){
  this.page = page;
  this.SignupLogin = page.getByRole("link",{name: " Signup / Login"})
  this.name = page.getByPlaceholder("Name");
  this.email = page.locator(".signup-form").getByPlaceholder("Email Address");
  this.signupbutton = page.locator("//div[@class ='signup-form']//button[@class='btn btn-default']");
  this.accountinformation = page.getByText("Enter Account Information");
  this.title = page.locator("input[id='id_gender1']");
  this.accountname = page.locator("input[id='name']");
  this.accountemail = page.locator("input[id='email']");
  this.accountpassword = page.locator("input[id='password']");
  this.accountdobdate = page.locator("#uniform-days");
  this.accountdobmonth = page.locator("#uniform-months");
  this.accountdobyears = page.locator("#uniform-years");
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
    await expect(this.page).toHaveURL("/signup");
  }
  async verifyaccountinformationtext(){
    await expect(this.accountinformation).toBeVisible();
  }
  async verifytitle(){
    await this.title.click();
  }
  async verifyname(n:string){
    await this.accountname.fill(n);
  }
  async verifyemail(){
    await expect(this.accountemail).toBeVisible();
  }
  async verifypassword(){
    await this.accountpassword.fill("test123456")
  }
  async verifyDOB(){
    await this.accountdobdate.selectOption({value : "14"});
    await this.accountdobmonth.selectOption({value : "10"});
    await this.accountdobyears.selectOption({value : "1998"});

  }
}
/*
Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/