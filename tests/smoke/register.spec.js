import{test} from '@playwright/test';
import { Register } from '../../page/registerpage';

test.describe("Group of register test case", async()=>{
 let reg;
    test.beforeEach(async({page})=>{    
    reg = new Register({page})
    await reg.open();
    })
    test("To verify the Register form",async()=>{
        await reg.register("Ayush Singh");
    })
})