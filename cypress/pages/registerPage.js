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

    clickOnContinueBtn(){
        cy.get(this.weblocators.continue).click()
    }

}