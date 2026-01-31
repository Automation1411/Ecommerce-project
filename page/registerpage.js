import{expect} from '@playwright/test';

export class Register{
constructor({page}){
    this.page = page;
    this.registration = page.getByText("Registration").last();
    //this.validatemessage = page.locator("text-xl uppercase font-oswald font-bold mb-5 flex items-center justify-between").getByText("User Authentication")
    this.name = page.getByPlaceholder("eg. Jhon Doe");
    this.selectcountry = page.locator("select[id='country']");
    this.selectaccount = page.locator("select[id='account']")
    this.email = page.getByPlaceholder("eg. user@user.com");
    this.password = page.locator("#password");
    this.confirmpassword = page.locator("#confirm_password");
    this.signupbutton = page.getByText("Signup");
}

async open(){
    await this.page.goto('/')
}
async register(name){
await this.registration.click();
//await expect(this.validatemessage).toBeVisible();
await this.name.fill(name);
await this.selectcountry.selectOption({label:'India'});
await this.selectaccount.selectOption({label:'Engineer'});
await this.email.fill("as@gmail.com");
await this.password.fill("as1234")
await this.confirmpassword.fill("as1234");
await this.signupbutton.click();
}
}