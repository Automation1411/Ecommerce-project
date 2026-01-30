import{expect}from '@playwright/test';
import { exitCode } from 'node:process';

export class Contact{
 constructor({page}){
    this.page =page;
    this.contactus = page.getByRole("link", {name: "Contact us"});
    this.getintouch = page.getByText("Get In Touch");
    this.name = page.locator("//div[@id ='form-section']").getByPlaceholder("Name");
    this.email = page.locator("//div[@id ='form-section']").getByPlaceholder("Email");
    this.subject = page.getByPlaceholder("Subject");
    this.message = page.getByPlaceholder("Your Message Here");
    this.choosefile = page.locator("input[name='upload_file']");
    this.submitbutton = page.locator("input[name='submit']");
    //this.successmessage = page.locator("status.alert.alert-success");
 }

 async open(){
    await this.page.goto("/")
 }

 async contactform(){
  await this.contactus.click();
  await expect(this.getintouch).toBeVisible();
  await this.name.fill("Ayush");
  await this.email.fill("ayushtest@gmail.com");
  await this.subject.fill("application test");
  await this.message.fill("testing the application");
  await this.choosefile.setInputFiles('tests/pdfdoc/dummy-pdf_2.pdf');
  this.page.on('dialog', async(dialog)=>{
  await dialog.accept();
  })
  await this.submitbutton.click();
  //const message = this.successmessage
  //await except(message).toBeVisible();
 }
}