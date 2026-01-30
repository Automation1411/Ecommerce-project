import{expect} from '@playwright/test';

export class Login{
   constructor({page}){
    this.page = page 
    this.navsigninlogin = page.getByRole('link',{ name:'Signup / Login' });
    this.logintxt = page.getByText("Login to your account");
    this.email = page.locator("input[placeholder='Email Address']").first();
    this.password = page.locator("input[placeholder='Password']");
    this.loginbtn = page.locator("button[type='submit']").getByText("Login");
    this.logout = page.getByRole('link',{name : " Logout"});
    this.invalidmessage = page.getByText("Your email or password is incorrect!");
   }
   async open(){
    await this.page.goto('/')
   }

   // Positive test 
   async loginacc(){
       await this.navsigninlogin.click();
       await expect(this.logintxt).toBeVisible();
       await this.email.fill("jaimatadi12@gmail.com");
       await this.password.fill("ayush1234test");
       await this.loginbtn.click();
       await this.logout.click();
   }

   // Negative test
   async Loginaccount(){
    await this.navsigninlogin.click();
    await this.email.fill("jmdtest00@gmail.com");
    await this.password.fill("ayush1254test");
    await this.loginbtn.click();
    await expect(this.invalidmessage).toBeVisible();
   }


}