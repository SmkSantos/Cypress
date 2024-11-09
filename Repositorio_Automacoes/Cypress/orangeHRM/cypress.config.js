const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env:{

      "name": "Admin",
      "pwd": "admin123"

  },

  e2e: {
    baseUrl:  "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
