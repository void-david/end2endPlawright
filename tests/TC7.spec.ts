import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({page}) =>{
  await page.goto('https://automationexercise.com/');
});

test('home page loads', async ({ page }) => {
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
});

test('Verify user is navigated to test cases page successfully', async ({ page }) => {
  await page.getByRole('link', { name: 'Test Cases' }).first().click();
  await expect(page).toHaveURL(/.*\/test_cases/);
});

test('This test will always fail just because', async ({ page }) => {
  // This assertion will always fail
  await expect(page.locator('non-existent-selector')).toBeVisible();
});

