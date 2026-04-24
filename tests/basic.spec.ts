import { test, expect, chromium } from '@playwright/test';

test('Open Google in Chrome', async () => {
  const browser = await chromium.launch({ headless: false }); // opens Chrome
  const page = await browser.newPage();

  await page.goto('https://www.google.com');

  const title = await page.title();
  console.log('Page Title:', title);

  expect(title).toContain('Google');

  await browser.close();
});