const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.tokopedia.com",
    defaultCommandTimeout: 60000,
    chromeWebSecurity: false,
    specPattern: "**/*.{feature,features}",
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },
});
