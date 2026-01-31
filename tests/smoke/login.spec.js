import{test} from '@playwright/test';
import { Login } from '../../page/loginpage';

test("To verify the login page", async({page})=>{
    const log = new Login ({page})
    await log.open();
    await log.loginform(" qa_testers@qabrains.com","Password123")
})