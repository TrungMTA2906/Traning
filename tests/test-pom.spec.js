import { expect , test} from "@playwright/test";

import { LoginPage } from "../page/login-page";
import { MaterialPage } from "../page/material-page";

/*
test('POM demo', async ({ page }) => {
    const username = 'testuser';
    const password = 'testpassword';

    const loginPage = new LoginPage(page);

    
    await test.step('Verify successful login', async () => {
        await loginPage.navigateToLoginPage();
        await loginPage.login('testuser', 'testpassword');
    });
});
*/

test('Material page demo', async ({ page }) => {

    const materialPage = new MaterialPage(page);
    const infoUser = {
        username: 'TrungND',
        email: 'NguyenDucTrung29061997@gmail.com',
        gender: 'female',
        hobbies: ['cooking', 'reading'],
        country: 'Canada',
        interests: ['Technology', 'Art'],
        dob: '1997-06-29',
        rating: '1',
        bio: 'This is automation test using Playwright',
        favoriteColor: '#ff0029',
        profilePicturePath: "C:\\Users\\nguyenductrung\\Desktop\\QR.png"
    };

    await test.step('truy cap Material page', async () => {
        await materialPage.navigateToMaterialPage();
    });

    await test.step('click vao tab Buttons', async () => {
        await materialPage.clickTab('01-xpath-register-page.html');
    });

    await test.step('dien thong tin', async () => {

        await materialPage.fillUsername(infoUser.username);
        await materialPage.fillEmail(infoUser.email);
        await materialPage.checkGender(infoUser.gender);
        await materialPage.checkHobby(infoUser.hobbies[0]);
        await materialPage.checkHobby(infoUser.hobbies[1]);
        await materialPage.selectCountry(infoUser.country);
        await materialPage.selectInterests(infoUser.interests);
        await materialPage.fillDateOfBirth(infoUser.dob);
        await materialPage.fillRating(infoUser.rating);
        await materialPage.fillBio(infoUser.bio);
        await materialPage.fillFavoriteColor(infoUser.favoriteColor);
        await materialPage.uploadProfilePicture(infoUser.profilePicturePath);
        await materialPage.submitForm();
        await page.pause();
    });

    await test.step('verify submission', async () => {
        const infoCheck = {
            username: await page.locator('tbody tr td:nth-child(2)').first().textContent(),
            email: await page.locator('tbody tr td:nth-child(3)').first().textContent(),
            gender: 'female',
            hobbies: ['cooking', 'reading'],
            country: 'Canada',
            interests: ['Technology', 'Art'],
            dob: '1997-06-29',
            rating: '1',
            bio: 'This is automation test using Playwright',
            favoriteColor: '#ff0029',
            profilePicturePath: "C:\\Users\\nguyenductrung\\Desktop\\QR.png"
        };

        await expect(infoUser).toEqual(infoCheck);
    });
});