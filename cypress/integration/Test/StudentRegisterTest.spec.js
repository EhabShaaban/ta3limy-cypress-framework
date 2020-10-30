/// <reference types="Cypress" />

import RegisterPage from '../Page/RegisterPage'

describe('Register as Student Suite', function() {

    it('Valid Student Register Test', function(){

        const rp = new RegisterPage()
        rp.visit()
        rp.clickOnNewRegistrationBtn()
        cy.title().should('be.equal', 'منـصــة تعليمى')

        rp.clickOnStudentBtn()
        rp.fillInFirstNameTextBox('Ehab')
        rp.fillInLastNameTextBox('Shaaban')
        rp.fillInMobileNumberTextBox('01255566325')
        cy.scrollTo(0, 500)
        /*
        ذكر
        أنثى
        */
        rp.clickOnGenderBtn('ذكر')
        rp.selectLevelDropDownList(5)
        rp.fillInPasswordTextBox('ehabshaaban100123')
        rp.fillInPasswordConfirmationTextBox('ehabshaaban100123')
        rp.clickOnAgree()
        rp.clickOnSubmitBtn()
    })
})