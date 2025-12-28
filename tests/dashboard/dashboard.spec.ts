import{test} from '@playwright/test';
import{Dashboardprofile} from '@pages/dashboardp';
import { loginhelp } from '@utils/authHelper';

test.describe("dashboard test",()=>{
    test.beforeEach(async({page})=>{
      await loginhelp(page)
    })
    test("To verify the dashboard user profile",async({page})=>{
        const dashboard = new Dashboardprofile(page)
        await dashboard.verifyabout();
        await dashboard.verifysupport();
        await dashboard.verifylogout();
    })
    
})