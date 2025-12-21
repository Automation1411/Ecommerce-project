import{Page, expect, Locator} from '@playwright/test';

export class dashboardprofile{
    readonly page: Page
    readonly profile: Locator;
    readonly about: Locator;
    readonly cancelabout: Locator
    readonly support: Locator;
    readonly Logout: Locator;

    constructor(page:Page){
        this.page = page;
        this.profile = page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon");
        this.about = page.getByText('About');
        this.cancelabout = page.locator(".oxd-dialog-close-button.oxd-dialog-close-button-position")
        this.support = page.getByRole('menuitem',{name:'Support'});
        this.Logout = page.getByRole('menuitem',{name: 'Logout'});
    }

    async verifyabout(){
        await this.profile.click();
        await this.about.click();
        await this.cancelabout.click();
    }
    async verifysupport(){
        await this.profile.click();
        await this.support.click();
    }
   async verifylogout(){
    await this.profile.click();
    await this.Logout.click();
   }
}
