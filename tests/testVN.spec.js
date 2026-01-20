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


test('basic input', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    await page.locator('#username').fill('Nguyen');
    await page.locator('#female').check();
    await page.waitForTimeout(5000);
    await page.locator('#male').check();
    await page.locator('#female').uncheck();

    
    await page.pause();
});


test('select', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    await page.locator('#country').selectOption('Canada');
    await page.locator('#interests').selectOption(['Technology', 'Art']);
    await page.pause();
});

test('date', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    await page.locator('#dob').fill('1997-06-29');
    await page.pause();
});

test('tongket', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    await page.locator('#username').fill('TrungND');
    await page.locator('#email').fill('NguyenDucTrung29061997@gmail.com');
    await page.locator('#female').check();
    await page.locator('#cooking').check();
    await page.locator('[name="hobbies"]').nth(0).check();
    await page.locator('[name="hobbies"]').nth(2).check();
    await page.locator('#country').selectOption('Canada');
    await page.locator('#interests').selectOption(['Technology', 'Art']);
    await page.locator('#dob').fill('1997-06-29');
    await page.locator('#rating').fill('1');
    await page.locator('#bio').fill('This is automation test using Playwright');
    await page.locator('#favcolor').fill('#ff0029');
    await page.locator('#customDate').evaluate(e1 => {e1.removeAttribute('readonly'); e1.value ='1997-06-29'; e1.setAttribute('readonly', 'readonly');});
    await page.locator('#starRatingValue').fill('5');
    await page.locator('#profile').setInputFiles('C:\\Users\\Admin\\Downloads\\anh bau\\2 vkck\\Bản sao của DSC00561.JPG');
    await page.locator('.tooltip').hover();
    await page.locator('button[type="submit"]').click();
    await page.pause();


});



test('mua hang', async ({ page }) => {
    await test.step('vao trang', async () => {
        await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');
    })
    await test.step('mua hang 1', async () => {
        await page.locator('[data-product-id]').nth(0).click();
    })
    await test.step('mua hang 2', async () => {
        await page.locator('[data-product-id]').nth(1).click({clickCount: 2});
    })
    await test.step('mua hang 3', async () => {
        await page.locator('[data-product-id]').nth(2).click({clickCount: 3});
    })
    await test.step('xong thi doi', async () => {
        await page.pause();
    })
});
*/

test('addTask', async ({ page }) => {
    await test.step('vao trang', async () => {
        await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
    })
    await test.step('add task 1-100', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('#new-task').fill('Task ' + i);
            await page.locator('#add-task').click();
        }
    })
    await test.step('xoa task le', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        })
        
        for (let i = 1; i <= 100; i++) {
            if (i % 2 != 0){
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();       
            }    
        }
    })

    await test.step('xong thi doi', async () => {
        await page.pause();
    })
});

