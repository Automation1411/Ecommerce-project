import{expect} from '@playwright/test';

export class Ecommerce{
    constructor({page}){
        this.page = page;
        this.ecommercebutton = page.getByText("E-Commerce Site");
        this.demositelink = page.getByRole('link',{name :"Visit Demo Site"});
        this.email = page.locator("input[id='email']");
        this.password = page.locator("input[id='password']");
        this.loginbutton = page.locator("button[type='submit']");
        //New item product 
        this.producttshirt = page.locator("img[alt='Sample Shirt Name']");
        //this.increaseproduct = page.locator(".rounded.w-8.h-8 flex.items-center.justify-center.text-lg.cursor-pointer").nth(1);
        //this.decreaseproduct = page.locator(".rounded.w-8.h-8 flex.items-center.justify-center.text-lg.cursor-pointer").nth(0);
        this.addtocart = page.locator('.product-details-wrapper').getByText('Add to cart');
        this.carticon = page.locator("span[role='button']").getByText("1");
        this.removeicon = page.getByText("Remove");
        this.removepoupmessage = page.getByText("Are you absolutely sure?");
        this.removepoupbutton = page.locator("button[data-slot='dialog-close']").getByText("Remove");
        this.cartempty = page.getByText("Your cart is empty.");
    }

    async open(){
        await this.page.goto("/")
    }
   // open demosite of ecommerce application
    async Demosite(){
        await this.ecommercebutton.click();
        await this.demositelink.click();
        await expect(this.page).toHaveURL("https://practice.qabrains.com/ecommerce/login");
    }
   // login to application
    async login(email, password){
      await this.email.fill(email);
      await this.password.fill(password);
      await this.loginbutton.click()
      await expect(this.page).toHaveURL("https://practice.qabrains.com/ecommerce")
    }

  // Add to Cart & Remove Items

  async product(){
    await this.producttshirt.click();
    //await this.increaseproduct.click();
    //await this.decreaseproduct.click();
    await this.addtocart.click();
    await this.carticon.click();
    await this.removeicon.click();
    await expect(this.removepoupmessage).toBeVisible();
    await this.removepoupbutton.click();
    await expect(this.cartempty).toBeVisible();
  }
  

}