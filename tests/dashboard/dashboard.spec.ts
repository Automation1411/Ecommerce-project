import{test} from '@playwright/test';
import { login } from '../../pages/loginp';
import{dashboardprofile} from '../../pages/dashboardp';

test.describe(()=>{
    let loginpage : login
    test.beforeEach("To verify user should be logged in",async({page})=>{
      loginpage = new login(page)
      await loginpage.open();
      await loginpage.enterusername("Admin");
      await loginpage.enteremail("admin123");
      await loginpage.loginbuttonclick();
    })
    test("To verify the dashboard user profile",async({page})=>{
        const dashboard = new dashboardprofile(page)
        await dashboard.verifyabout();
        await dashboard.verifysupport();
        await dashboard.verifylogout();
    })
    
})