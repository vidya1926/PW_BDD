import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { pagefixture } from "./pageFixture";
import { afterEach, beforeEach } from "node:test";

let browser:Browser
let context:BrowserContext
let page:Page



Before(async () => {
  console.log('Before each hook');

    browser=await chromium.launch({headless:false})
       context=await browser.newContext();
       page=await context.newPage();
        pagefixture.page=page
})

After(async () => {
  console.log('After each hook');
  await pagefixture.page.close();
})

// afterEach(async () => {
  
//  const img=await pagefixture.page.screenshot({path:"./test-results/screenshots/"+Date.now(),type:"png"})
//  await this.attach(img,"image/png")
// })

AfterAll(async () => {  
  await context.close();
  await browser.close();
})