import{test, Page} from '@playwright/test';
import { login } from '../../pages/loginp';

test.describe(()=>{
    let loginpage : login
    test.beforeEach(async({page})=>{
       loginpage = new login(page)
       await loginpage.open();
    })
    test("Verify the login page",async()=>{
        await loginpage.verifyorangehrm();
        await loginpage.enterusername("Admin");
        await loginpage.enteremail("admin123");
        await loginpage.loginbuttonclick();
    })
})