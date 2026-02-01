import{test} from '@playwright/test';
import { FormSubmission } from '../../page/formsubmissionpage';

test.describe("Formsubmission",()=>{
 let f;
 test.beforeEach(async({page})=>{
    f = new FormSubmission({page});
    await f.open()
 })
 test("To verify the functionality of the form",async()=>{
    await f.form("ayushsingh", "as@gmail.com","94768746571");
 })

})