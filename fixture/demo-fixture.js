import { test as base } from '@playwright/test';

/**
 * @param {{
 *   demoFixture: import('@playwright/test').Page
 * }} args
 */


export const test = base.extend({
  demoFixture: async ({ page }, use) => {
    console.log('--- Setup demo fixture ---');
    await use(page);
    console.log('--- Teardown demo fixture ---');
  }
});
