const { test, expect } = require('@playwright/test');
const testData = require('../data/testData.json');

test('Visita la página y verifica el encabezado', async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com');
  const headerText = await page.textContent('h1');
  expect(headerText.trim()).toBe(testData.headerText);
});