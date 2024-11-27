import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('discover');
  await page.goto('https://www.google.com/search?q=discover&sca_esv=651549d4eb9f225e&source=hp&ei=z306Z_25DbmikPIP-9PrkAM&iflsig=AL9hbdgAAAAAZzqL3y5z1z9i7gQlfMGKI2QiiUNKnpAp&ved=0ahUKEwi93cyRxOSJAxU5EUQIHfvpGjIQ4dUDCA8&uact=5&oq=discover&gs_lp=Egdnd3Mtd2l6IghkaXNjb3ZlcjIOEC4YgAQYsQMY0QMYxwEyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyCBAuGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyDhAuGIAEGMcBGI4FGK8BMgsQLhiABBjRAxjHATIOEC4YgAQYsQMY0QMYxwFI9AtQxQJY8gpwAXgAkAEAmAFKoAHkA6oBATi4AQPIAQD4AQGYAgmgApgEqAIKwgIQEAAYAxjlAhjqAhiMAxiPAcICEBAuGAMY5QIY6gIYjAMYjwHCAg4QABiABBixAxiDARiKBcICBRAuGIAEwgIOEC4YgAQYsQMYgwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAAGIAEGLEDGIMBwgILEAAYgAQYsQMYyQPCAgsQABiABBiSAxiKBcICCBAAGIAEGMkDmAMMkgcBOaAHu2Q&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Discover Consumer Bank -' }).click();
  await page.locator('#main-content-rwd').getByRole('link', { name: 'Online Banking' }).click();
  await page.locator('.reskin-hero-img').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'help you find an account' }).click();
  const page1 = await page1Promise;
});