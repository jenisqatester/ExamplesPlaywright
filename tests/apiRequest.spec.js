const { test, expect } = require('@playwright/test');
const testData = require('../data/testData.json');
test('Extrae datos de un JSON y verifica un valor concreto del JSON', async ({ request }) => {
    const response = await request.get(testData.apiUrl);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.title).toBe(testData.expectedTitle);
  });