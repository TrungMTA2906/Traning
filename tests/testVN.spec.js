import { test, expect } from '@playwright/test';

/*
test.describe('VN tests suite', async() => {

    test('VN test case 1', async ({ page }) => {
        test.step('Navigate to VNExpress', async () => {
            await page.goto('https://vnexpress.net/');
        });
        test.step('Check title contains VNExpress', async () => {
            await expect(page).toHaveTitle(/VNExpress/);
        });
    });

    test('VN test case 2', async ({ page }) => {
        test.step('Navigate to VNExpress', async () => {
            await page.goto('https://vnexpress.net/');
        });
        test.step('Check title contains VNExpress', async () => {
            await expect(page).toHaveTitle(/VNExpress/);
        });
    });



});



test('basic actions', async ({ page }) => {
    //await page.goto('https://vnexpress.net/');
    //await page.pause(3000);
    //await page.goto('https://google.com/');

    await page.goto('https://material.playwrightvn.com/018-mouse.html');
    await page.click('#clickArea');
    await page.dblclick('#clickArea');
    await page.locator('#clickArea').click();
    await page.locator('#clickArea').dblclick();
    await expect(page.locator('#clickCount')).toContainText('6');
    await page.locator('#clickArea').click({
        modifiers: ["Shift", "Alt"]
    });
    console.log(await page.locator('#modifierKeys').textContent());
});
*/

test('basic input', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    await page.locator('#username').fill('Nguyen');
    await page.locator('#female').check();
});