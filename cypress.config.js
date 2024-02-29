const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 8000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,

  },
  projectId: 'aqhntk',

  e2e: {
    specPattern: 'cypress/integration/examples/*.js'

  },
});
