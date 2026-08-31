import { test, expect } from '@playwright/test';

// Criterio 3: username correcto + password incorrecto -> permanece en /login con error de contraseña.
test('password inválido muestra error de contraseña', async ({ page }) => {
  await page.goto('/login');
  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('passwordIncorrecto');
  await page.locator('#submit-login').click();

  await expect(page).toHaveURL('https://practice.expandtesting.com/login');
  await expect(page.locator('#flash')).toContainText('Your password is invalid!');
});
