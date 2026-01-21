import {Page}  from '@playwright/test';

import { BasePage } from './base-page';

export class LoginPage extends BasePage {
    xpathUsername = '#username';
    xpathPassword = '#password';
    xpathLoginButton = '#loginBtn';

    constructor(page) {
        super(page);
    }

    async navigateToLoginPage() {
        await this.page.goto('url_of_login_page');
    }

    async fillUsername(username) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillPassword(password) {
        await this.page.locator(this.xpathPassword).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.xpathLoginButton).click();
    }

    async login(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}