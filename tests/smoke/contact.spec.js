import{test} from '@playwright/test';
import { Contact } from '../../page/contactpage';

//Contact form
test("Contact Us Form",async({page})=>{
    const contactf = new Contact({page})
    await contactf.open();
    await contactf.contactform();
})