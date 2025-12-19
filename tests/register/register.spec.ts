import{test} from '@playwright/test';
import{registerform} from '../../pages/registerp';
test.describe.serial("group of test",()=>{
let register : registerform

test.beforeEach("run it before test",async({page})=>{
    register = new registerform({page})
    await register.launchUrl()   
})

 test("verify the register form",async()=>{
    await register.signin();
    await register.entername("ay")
    await register.enteremail("aytest12@gmail.com")
    await register.signupbuttonclick();
    await register.verifyaccountinformationtext();
    await register.verifytitle();
    await register.verifyname("ayushQA");
    await register.verifyemail();
    await register.verifypassword();
    await register.verifyDOB();
 })
})

