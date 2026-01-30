import{test} from '@playwright/test';
import { Login } from '../../page/loginpage';
import { Register } from '../../page/registerpage';

//login test cases

test.describe(()=>{
   let reg;
    test.beforeEach(async ({ page }) => { 
        reg = new Register({ page });  // matches constructor
        await reg.open();
        await reg.verifySignupLogin();
        await reg.verifysignupoff();
    });

    //Positive Test Case
    test.only(" Login User with correct email and password",async({page})=>{
    const log = new Login({page})
    await log.loginacc();
    });
    //Negative Test Case
    test("Login User with incorrect email and password",async({page})=>{
    const log = new Login({page})
    await log.Loginaccount();
    })
});