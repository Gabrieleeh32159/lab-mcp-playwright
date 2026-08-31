import { test, expect } from '@playwright/test';

// Criterio 4: desde el área segura, click en Logout regresa al login.
test('logout regresa al login', async ({ page }) => {
  await page.goto('/login');
  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('#submit-login').click();
  await expect(page).toHaveURL('https://practice.expandtesting.com/secure');

  await page.locator('a[href="/logout"]').click();

  await expect(page).toHaveURL('https://practice.expandtesting.com/login');
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});
