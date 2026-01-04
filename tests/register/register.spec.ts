import { Register } from '@pages/registerp';
import{test,Page} from '@playwright/test';

// Group of Register test Cases
test.describe("Register form",()=>{
 let reg : Register; 
 // open the application
 test.beforeEach(async({page})=>{ 
 reg = new Register({page})
 await reg.open();
 });

 test("To verify the click signup and login",async({page}:{page:Page})=>{
 await reg.verifySignupLogin();
 await reg.verifysignupoff();
 })

})