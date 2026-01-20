import {test, expect, Browser, BrowserContext,chromium, page} from '@playwright/test';


//const {test, chromium}=require('@playwright/test')


//test('first palywright test',async (browser)=> 
//{

//})


test('login ruoutrungquyet', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:8000/auth/');
    console.log(await page.title());

    await page.locator('#loginUser').fill("TrungND");
    await page.locator('#loginPass').fill("TrungND2906");
    await page.locator('#btnLogin').click();

    await expect(page.locator('#authTag')).toContainText('Đã đăng nhập (role=BDS)', { timeout: 5000 });
    const data = page.locator('.table-wrap')

   console.log(await data.textContent());
})

test('input ruoutrungquyet', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:8000/auth/');
    await page.locator('#loginUser').fill("TrungND");
    await page.locator('#loginPass').fill("TrungND2906");
    await page.locator('#btnLogin').click();
    const input = await page.locator(".row input").all();
    console.log(input);
})



test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})

test('grandit', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://172.172.6.3/v400SIF/CM_AC_03_S01.aspx');
    console.log('Current URL:', page.url());
    await page.locator("select.input_bg_2").selectOption("R1100");
    await page.locator('#LoginAccountText').fill("Administrator");
    await page.locator('#PassText').fill("Administrator");
    await Promise.all([
    page.waitForURL(/CM_AC_01_S01\.aspx/, { timeout: 30000 }),
    page.locator('#LoginButton').click(),
    ]);
    console.log(await page.locator("pseudo_window").last().allTextContents());
    //.frameLocator('iframe').locator('#F12Button').click();
    
    //a

})


/*
test('Browser Hi TrungND ban ruou', async({browser})=>{
    // khoi tao brower
    // khoi tao context
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://translate.google.com/?hl=vi") 
})

test('page Hi TrungND ban ruou', async({page})=>{
    // khoi tao brower
    // khoi tao context
   // const context = browser.newContext();
    //const page = context.newPage()
    await page.goto("https://translate.google.com/?hl=vi") 
})

test('hihi', async({})=>{
   // const browser : Browser = await chromium.launch();
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://translate.google.com/?hl=vi") 
    await expect(page).toHaveTitle(/Google Dịch/)
    await browser.close();
})
    */