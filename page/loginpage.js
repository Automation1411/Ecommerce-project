import{expect} from '@playwright/test';

export class Login{
    constructor({page}){
        this.page = page;
        this.email = page.locator("input[id ='email']");
        this.password = page.locator("input[id ='password']");
        this.invalidpassword = page.getByText("Password must be at least 6 characters");
        this.loginbutton = page.locator(".btn-submit.uppercase.flex.items-center.gap-2.justify-center.font-oswald.mt-4")
        this.successmessage = page.getByText("Congratulations. You have successfully logged in. When you are done click logout below.");
        this.invalidmessage = page.locator(".title.text-black.text-md")
        this.logout= page.locator(".btn-submit.uppercase.flex.items-center.gap-2.justify-center.font-oswald.mt-4")
    }

    async open(){
        await this.page.goto("/");
    }
    // Valid scenarios
    async loginform(email, pwd){
     await this.email.fill(email);
     await this.password.fill(pwd);
     await this.loginbutton.click();
     await expect(this.successmessage).toBeVisible();
     await this.logout.click();

    }

    // Invalid Scenarios

    async loginf(email, pwds){
     await this.email.fill(email);
     await this.password.fill(pwds);
     await this.loginbutton.click();
     await expect(this.invalidpassword).toBeVisible();
    
    }
    //Invalid Scenarios
    async loginfm(email, pwd){
     await this.email.fill(email);
     await this.password.fill(pwd);
     await this.loginbutton.click();
    
    }
}