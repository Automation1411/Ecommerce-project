import{expect} from '@playwright/test';

export class Login{
    constructor({page}){
        this.page = page;
        this.email = page.locator("input[id ='email']");
        this.password = page.locator("input[id ='password']");
        this.loginbutton = page.locator(".btn-submit.uppercase.flex.items-center.gap-2.justify-center.font-oswald.mt-4")
    }

    async open(){
        await this.page.goto("/");
    }

    async loginform(email, pwd){
     await this.email.fill(email);
     await this.password.fill(pwd);
     await this.loginbutton.click();
    }
}