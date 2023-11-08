const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '39yau7',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle:'Projeto do curso de cypress',
      reportPageTitle: 'Projeto do curso de cypress',
    },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
