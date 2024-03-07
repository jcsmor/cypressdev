//const cypress = require("cypress");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');

async function setupNodeEvents(on, config) {
  // loads all plugins before runs the tests
  // implement node event listners here

  config.db = {
    userName: "dadm",
    password: "Daimonlux137",
    server: "daimonserver.database.windows.net",
    options: {
      database: "daimondb",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }

  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin
  return config;
}

module.exports = defineConfig({

  defaultCommandTimeout: 8000,
  reporter: 'mochawesome',
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,

  },
  projectId: 'aqhntk',

  e2e: {
    setupNodeEvents,
    //specPattern: "**/*.feature"
    specPattern: "cypress/integration/examples/*.js"
  }
});