import{test} from '@playwright/test';
import { loginhelp } from '@utils/authHelper';
import { Admin } from '@pages/adminp';

test.describe("dashboard test",()=>{
    test.beforeEach(async({page})=>{
      await loginhelp(page)// reused the login 
    })
    test("admin test cases",async({page})=>{
        const adminclick = new Admin(page);
        await adminclick.verifyadminbutton();
       
    })
    
})