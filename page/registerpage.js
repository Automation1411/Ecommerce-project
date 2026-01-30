import {expect} from '@playwright/test';

export class Register{
  
    constructor({page}){
        this.page = page
        this.navsigninlogin = page.getByRole('link',{ name:'Signup / Login' });
        this.usersignup = page.getByText('New User Signup!');
        this.name = page.locator("input[placeholder='Name']");
        this.email = page.locator('input[placeholder="Email Address"]').last();
        this.signupbutton = page.locator("//form[@action='/signup']//button[@type='submit']").last();
        this.accountinformation = page.getByText("Enter Account Information");
        this.title = page.locator("input[id='id_gender1']");
        this.accountname= page.locator("//div[@class='required form-group']//input[@id='name']")
        this.accountpassword = page.locator("//div[@class='required form-group']//input[@id='password']")
        this.days= page.locator("select[ id ='days']");
        this.months = page.locator("select[ id ='months']");
        this.years= page.locator("select[ id ='years']");
        this.signupnewsletter = page.locator("input[id='newsletter']");
        this.specialoffer= page.locator("input[id='optin']");
        this.firstname = page.locator("input[id='first_name']");
        this.lastname = page.locator("input[id='last_name']");
        this.company = page.locator("input[id='company']");
        this.address = page.locator("input[id='address1']");
        this.address2 = page.locator("input[id='address2']");
        this.country = page.locator("select[id='country']");
        this.state = page.locator("input[id='state']");
        this.city = page.locator("input[id='city']");
        this.zipcode = page.locator("input[id='zipcode']");
        this.mobilenumber = page.locator("input[id='mobile_number']");
        this.createbutton = page.getByText("Create Account");
        this.accountcreated = page.getByText("Account Created!");
        this.continue = page.getByRole("link",{name: "Continue"});
        this.textlogged = page.getByText("Logged in as");
        this.logout = page.getByRole('link',{name : " Logout"});
        //this.deleteacc = page.getByRole('link',{name: "Delete Account"})
        

    }

    async open(){
        await this.page.goto("/");
    }

    async verifySignupLogin(){
        await this.navsigninlogin.click();
    }

    async verifysignupoff(){
        try{
        await expect(this.usersignup).toHaveText("New User Signup!");
        }catch(err){
            console.log("test")
            throw err;
        }
        await this.name.fill("sumit")
        await this.email.fill("jaimatadi12@gmail.com")
        await this.signupbutton.click();
        try{
            await expect(this.accountinformation).toBeVisible();
        }catch(err){
            console.log("testing")
            throw err;
        }
     await expect(this.accountinformation).toBeVisible();
     await this.title.check();
     await this.accountname.fill("Ayush singh");
     await this.accountpassword.fill("ayush1234test");
     await this.days.selectOption({value : '1'});
     await this.months.selectOption({value: '10'});
     await this.years.selectOption({value: '1998'});
     await this.signupnewsletter.check();
     await this.specialoffer.check();
     await this.firstname.fill("akash");
     await this.lastname.fill("singh");
     await this.company.fill("Mtap technologies");
     await this.address.fill("Delhi")
     await this.address2.fill("New Delhi");
     await this.country.selectOption("India");
     await this.state.fill("New Delhi Delhi NCR");
     await this.city.fill("New delhi Delhi NCR");
     await this.zipcode.fill("201002");
     await this.mobilenumber.fill("9650382808");
     await this.createbutton.click();
     await expect(this.accountcreated).toBeVisible();
     await this.continue.click();
     const username = this.textlogged;
     await expect(username).toContainText("Ayush singh");
     await this.logout.click();
     //await this.deleteacc.click();

    }
}