export class loginPage{

    weblocators = {
        email: '#input-email',
        password: '#input-password',
        loginbtn: 'input[type=submit]' 
    }

    loginURL(){
        cy.visit(Cypress.env('LoginURL'))
    }

    enterEmail(eMail){
        cy.get(this.weblocators.email).type(eMail)
    }

    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
    }

    clickOnLoginBtn(){
        cy.get(this.weblocators.loginbtn).click()
    }
''
}