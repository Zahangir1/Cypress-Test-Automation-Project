--------------------------------------- Cypress Documentaion --------------------------------------

Automation Framework Architecture:
Installing Cypress with updated version
Download and Install nodejs
Download and Install Visual Studio Code (VS code)
Create a new folder for project & open in VSCode
npm -i init
npm install cypress --save-dev
npx cypress open
cypress\e2e\registerTest.cy.js
Cypress\e2e\tests
registerTest.cy.js
loginTest.cy.js
 Fixture
registerData.json
loginData.json
testData.json
Page Object Model (POM)/pages
registerPage.js
loginPage.js
homePage.js
Reports\html
assets
screenshots
videos
index.html
Support
commands.js
e2e.js
Cypress.config.js
Retries
URL
Timeouts
Github:
Repository
Clone
Add files
Commit, Push
CI/CD Pipeline Integration
Github Actions
Scheduling (Every morning or night)





Environment Setup:
==============================
1. Download and Install nodejs
2. Download and Install Visual Studio Code (VS code)
3. Create a new folder for project & open in VSCode
4. Open cmd/terminal then execuate below command
  npm -i init  -----------> create package.json file
5. To install cypress
   npm install cypress --save -dev
6. Start cypress
   npx cypress open    (or)
   node_modules/.bin/cypress open
7. Create new spec
   cypress\e2e\registerTest.cy.js
8. install cypress-mochawesome-reporter
   npm i --save-dev cypress-mochawesome-reporter


Using command for e2e test case run
=====================================
npm init
npm install cypress --save-dev
npx cypress -v or npx cypress verify
npx cypress open
npx cypress run
npx cypress run --headed
npx cypress run --spec cypress\e2e\tests\loginTest.cy.js
npx cypress run --browser chrome --headed --spec cypress\e2e\tests\loginTest.cy.js  
npx cypress run --browser chrome
npx cypress run --browser chrome --headed

Locators
================
1. CSS Selector
2. XPath

cy.get(CSS Locator)
cy.xpath(Xpath)

CSS Selector
=============
tag id
tag class
tag attribute
tag class attribute

tag #id
tag .class
tag [attribute='value']
tag .class[attribute='value']


Xpath
============================
npm install -D cypress-xpath
cy.xpath(Xpath)


================== Cypress Project Setup & Create Step by Step: =================

Step 1: Installing Cypress with updated version
Download and Install nodejs
Download and Install Visual Studio Code (VS code)
Create a new folder for project & open in VSCode (enter cmd to code .)
npm -i init
npm install cypress --save-dev
npx cypress open
cypress\e2e\registerTest.cy.js [ Create e2e test scripts ]
Step 2: After the Cypress project installation setup, you can find module of
downloads
e2e 
fixtures
support
Node_modules
cypress.config.js
package-lock.json
package.json
Step 3: Initialize the cypress page object model (POM)
View of page object model pattern:

Add basecURL, plugin and dependencies into class of: cypress.config.js


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



Create pom pattern initialize to the folder of: pages
registerPage.js


export class registerPage{


    weblocators= {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }




    registrationUrl() {
        cy.visit(Cypress.env('RegistrationURL'))
    }


    enterFirstName(fname){
        cy.get(this.weblocators.firstName).type(fname)
    }


    enterLastName(lname){
        cy.get(this.weblocators.lastName).type(lname)
    }


    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }


    enterTelephoneNumber(t_number){
        cy.get(this.weblocators.telephone).type(t_number)
    }


    enterPassword(psw){
        cy.get(this.weblocators.password).type(psw)
        cy.get(this.weblocators.confirmPassword).type(psw)
    }


    selectPolicyCheckBox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }


    click Continue tn(){
        cy.get(this.weblocators.continue).click()
    }
}



Add test json data add to the folder of: fixtures
registerData.json


{
    "firstName": "QA",
    "lastName": "Tester",
    "email": "zahangir@gmail.com",
    "telephone": "012345234",
    "password": "Cypress12344"
}



Executed test case run into : e2e\tests
registerTest.cy.js


import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from "../../fixtures/registerData.json"




describe('registration section', () => {
 
  it('registration flow', () => {    


    registerObj.registrationUrl()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLastName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephoneNumber(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectPolicyCheckBox()
    registerObj.clickOnContinueBtn()
    cy.screenshot()


  })


})




