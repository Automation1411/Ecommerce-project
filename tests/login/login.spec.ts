import{test, Page} from '@playwright/test';
import { Login } from '@pages/logins';

test.describe(()=>{
    let loginpage : Login
    test.beforeEach(async({page})=>{
       loginpage = new Login(page)
       await loginpage.open();
    })
    test("Verify the login page",async()=>{
        await loginpage.verifyorangehrm();
        await loginpage.enterusername("Admin");
        await loginpage.enteremail("admin123");
        await loginpage.loginbuttonclick();
    })
})