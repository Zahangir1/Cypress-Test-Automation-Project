import { loginPage } from "../../pages/loginPage"
const loginObj = new loginPage()
import loginData from '../../fixtures/loginData.json' 


describe('login credentials', () =>{

    it('verify with valid login', ()=>{
        loginObj.loginURL()
        cy.wait(2000)
        loginObj.enterEmail(loginData.email)
        cy.wait(2000)
        loginObj.enterPassword(loginData.password)
        cy.wait(2000)
        loginObj.clickOnLoginBtn()
        cy.wait(2000)
        cy.screenshot()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    })

})