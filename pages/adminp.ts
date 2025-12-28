import{Page, Locator, expect} from '@playwright/test';
export class Admin{
 readonly page: Page;
 readonly admin: Locator;
 readonly add: Locator;
 readonly userRole: Locator;
 readonly adminoption: Locator;
 constructor(page:Page){
  this.page = page;
  this.admin = page.locator('.oxd-sidepanel-body').getByText('Admin',{exact: true});
  this.add = page.locator('.oxd-button.oxd-button--medium.oxd-button--secondary').nth(1);
  this.userRole = page.locator('.oxd-select-text-input').nth(0);
  this.adminoption = page.getByText('Admin', { exact: true }).last()
 }

 async verifyadminbutton(){
    await this.admin.click();
    await this.add.click();
    await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
    await this.userRole.click();
    await this.adminoption.click();
 }
}