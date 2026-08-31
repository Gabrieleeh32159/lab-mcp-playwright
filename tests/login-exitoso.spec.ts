import { test, expect } from '@playwright/test';

// Criterio 1: con practice / SuperSecretPassword! redirige al área segura y muestra mensaje de éxito.
test('login exitoso redirige al área segura', async ({ page }) => {
  await page.goto('/login');
  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('#submit-login').click();

  await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  await expect(page.locator('a[href="/logout"]')).toBeVisible();
});
