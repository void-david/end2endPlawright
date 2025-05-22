import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({page}) =>{
  await page.goto('https://automationexercise.com/');
});

test('home page loads', async ({ page }) => {
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
});

test('click Signup / Login button', async ({ page }) => {
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await expect(page).toHaveURL(/.*\/login/);
});

test("Verify 'Login to your account' is visible", async ({ page }) => {
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await expect(page.locator('h2', { hasText: 'Login to your account' })).toBeVisible();
});

test('Enter incorrect email address and password', async ({ page }) => {
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await page.locator('input[data-qa="login-email"]').fill('wrong@email.com');
  await page.locator('input[data-qa="login-password"]').fill('incorrectpassword');
});

test('Click login button and verify error message', async ({ page }) => {
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await page.locator('input[data-qa="login-email"]').fill('wrong@email.com');
  await page.locator('input[data-qa="login-password"]').fill('incorrectpassword');
  await page.locator('button[data-qa="login-button"]').click();
  await expect(page.locator('p', { hasText: 'Your email or password is incorrect!' })).toBeVisible();
});

test('This test will always fail just because', async ({ page }) => {
  // This assertion will always fail
  await expect(page.locator('non-existent-selector')).toBeVisible();
});