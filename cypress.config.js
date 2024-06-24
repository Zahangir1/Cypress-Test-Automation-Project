const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  videoCompression: true,
  reporter: 'cypress-mochawesome-reporter',


  e2e: {
    
    //baseURL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },

  env: {
    RegistrationURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    LoginURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  }

});
