import{test} from '@playwright/test';
import { Login } from '../../page/loginpage';
test.describe("Login Test",()=>{
  let log;

 test.beforeEach(async({page})=>{
 log = new Login ({page})
 await log.open();
 });
 // valid cred
 test("To verify the login with valid cred", async()=>{
    await log.loginform(" qa_testers@qabrains.com","Password123")
 });

 //invalid cred password
 test("To verify the login with invalid password", async()=>{
    await log.loginf(" qa_testers1@qabrains.com","1")
 });

 //invalid cred
 test("To verify the login with invalid cred", async()=>{
    await log.loginfm(" qa_testers1@qabrains.com","1Pas7845686")
 });
});
