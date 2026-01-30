import { Register } from '../../page/registerpage';
import { test } from '@playwright/test';

//Register test cases
test.describe("Register form", () => {
    let reg;
   
    test.beforeEach(async ({ page }) => { 
        reg = new Register({ page });  // matches constructor
        await reg.open();
    });

    test("To verify the click signup and login", async ({ page }) => {
        await reg.verifySignupLogin();
        await reg.verifysignupoff();
    });
});


