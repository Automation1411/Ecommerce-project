 import{test} from '@playwright/test';
 import { Ecommerce } from '../../page/qaecommercepage';
  
 test.describe.serial("To verify the Ecommerce app",()=>{
    let ecom;
    test.beforeEach(async({page})=>{
        ecom = new Ecommerce({page})
        await ecom.open()
    });
    //login
    test("ecommerce app test",async()=>{
     await ecom.Demosite();
     await ecom.login("practice@qabrains.com","Password123");
    });
   // add item to the cart
    test("To verify the Add to Cart & Remove Items",async()=>{
         await ecom.Demosite();
         await ecom.login("practice@qabrains.com","Password123");
        await ecom.product();
    })
 });