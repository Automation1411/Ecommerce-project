import{expect} from '@playwright/test';

export class FormSubmission{
    constructor({page}){
        this.page = page;
        this.formbutton = page.getByText("Form Submission").first();
        this.formname= page.locator("input[id='name']");
        this.formemail = page.locator("input[id='email']");
        this.contactnumber = page.getByPlaceholder("880 XXXX XXX XXX");
        this.datepicker = page.locator("input[id='date']");
        this.filechoose = page.locator("input[id='file']");
        this.selectcolors = page.locator("input[id ='Blue']");
        this.selectfood = page.locator("input[id='Pizza']");
        this.selectf = page.locator("input[id='Burger']");
        this.selectcountry = page.locator("#country");
        this.submit = page.locator("button[type= 'submit']");
    }

    async open(){
        await this.page.goto("/");
    }

    async form(n,e,m){
    await this.formbutton.click();
    await this.formname.fill(n);
    await this.formemail.fill(e);
    await this.contactnumber.fill(m);
    await this.datepicker.fill("2026-02-03");
    await this.filechoose.setInputFiles("tests/pdfdoc/dummy-pdf_2.pdf");
    await this.selectcolors.click();
    await this.selectfood.check();
    await this.selectfood.uncheck();
    await this.selectf.check();
    await this.selectcountry.selectOption({label: 'India'});
    await this.submit.click();

    }
}