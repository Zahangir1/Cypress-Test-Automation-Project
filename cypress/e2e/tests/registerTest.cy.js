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

