import{expect} from '@playwright/test';

export class Tc{
    constructor({page}){
        this.page = page;
        this.testcase = page.locator('.nav.git navbar-nav').getByRole('link',{name :'Test Cases'});
        this.message = page.getByText("Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:")
    }

   async open(){
    await this.page.goto('/')
   }
    async verifytest(){
        await this.testcase.click();
        await expect(this.message).toBeVisible();
    }
}