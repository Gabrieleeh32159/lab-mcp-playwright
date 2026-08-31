import { test, expect } from '@playwright/test';

// Criterio 2: username incorrecto -> permanece en /login con error de usuario.
test('username inválido muestra error de usuario', async ({ page }) => {
  await page.goto('/login');
  await page.locator('#username').fill('usuarioInvalido');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('#submit-login').click();

  await expect(page).toHaveURL('https://practice.expandtesting.com/login');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
