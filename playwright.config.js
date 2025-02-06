const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Carpeta donde están tus pruebas
  timeout: 30000, // Tiempo límite para cada prueba
  retries: 2, // Reintentos en caso de fallo
  use: {
    headless: true, // Ejecutar en modo headless
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }, // Ejecutar en Chromium (Chrome)
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }, // Ejecutar en Firefox
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }, // Ejecutar en WebKit (Safari)
    }
  ],
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // Configuración del reporte HTML
});
