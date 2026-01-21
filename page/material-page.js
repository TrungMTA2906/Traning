import {Page}  from '@playwright/test';
import { BasePage } from './base-page';

export class MaterialPage extends BasePage {
    materialLink = 'https://material.playwrightvn.com/';

    constructor(page) {
        super(page);
    }

    async navigateToMaterialPage() {
        await this.page.goto(this.materialLink);
    }

    async clickTab(tabName) {
        await this.page.locator(`a[href*="${tabName}"]`).click();
    }

    async fillUsername(username) {
        await this.page.locator('#username').fill(username);
    }

    async fillEmail(email) {
        await this.page.locator('#email').fill(email);
    }

    async checkGender(gender = 'female' | 'male') {
        await this.page.locator(`#${gender}`).check();
    }

    async checkHobby(hobby = 'cooking' | 'traveling' | 'reading') {
        const hobbyIndex = hobby === 'cooking' ? 0 : hobby === 'traveling' ? 1 : 2;
        await this.page.locator('[name="hobbies"]').nth(hobbyIndex).check();
    }

    async selectInterests(interests = []) {
        await this.page.locator('#interests').selectOption(interests);
    }

    async selectCountry(country) {
        await this.page.locator('#country').selectOption(country);
    }
    
    async fillDateOfBirth(dob) {
        await this.page.locator('#dob').fill(dob);
    }

    async fillBio(bio) {
        await this.page.locator('#bio').fill(bio);
    }

    async fillRating(rating) {
        await this.page.locator('#rating').fill(rating);
    
    }

    async fillFavoriteColor(color) {
        await this.page.locator('#favcolor').fill(color);
    }

    async uploadProfilePicture(filePath) {
        await this.page.locator('#profile').setInputFiles(filePath);
    }

    async submitForm() {
        await this.page.locator('button[type="submit"]').click();
    }
}