import { test, expect } from '@playwright/test';

test.only('test - CODEGEN', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').dblclick();
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('Pliers');
  await page.locator('[data-test="search-submit"]').click();
  await page.getByRole('heading', { name: 'Combination Pliers' }).click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('.btn.btn-danger').click();
});