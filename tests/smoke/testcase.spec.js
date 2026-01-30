import{test} from '@playwright/test';
import { Tc} from '../../page/testcasepage';

test("To verify the test",async({page})=>{
const testc = new Tc({page})
await testc.open();
await testc.verifytest();

})