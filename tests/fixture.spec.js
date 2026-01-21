import {test} from '../fixture/demo-fixture';


test.beforeEach(async ({ demoFixture }) => {
    console.log('--- Before each in demo fixture spec ---');
});

test.afterEach(async ({ demoFixture }) => {
    console.log('--- After each in demo fixture spec ---');
});

test('demo fixture test', async ({ demoFixture }) => {
    console.log('--- Inside demo fixture test ---');
});