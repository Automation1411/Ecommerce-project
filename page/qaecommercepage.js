import{expect} from '@playwright/test';

export class Ecommerce{
    constructor({page}){
        this.page = page;
        this.ecommercebutton = page.getByText("E-Commerce Site");
        this.demositelink = page.getByRole('link',{name :"Visit Demo Site"});
        this.email = page.locator("input[id='email']");
        this.password = page.locator("input[id='password']");
        this.loginbutton = page.locator("button[type='submit']")
    }

    async open(){
        await this.page.goto("/")
    }

    async Demosite(){
        await this.ecommercebutton.click();
        await this.demositelink.click();
        await expect(this.page).toHaveURL("https://practice.qabrains.com/ecommerce/login");
    }

    async login(email, password){
      await this.email.fill(email);
      await this.password.fill(password);
      await this.loginbutton.click()
      await expect(this.page).toHaveURL("https://practice.qabrains.com/ecommerce")
    }
}