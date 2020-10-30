/// <reference types="Cypress" />

import RegisterPage from '../Page/RegisterPage'

describe('Register as Student Suite', function() {
    beforeEach(function(){
        cy.fixture('data').as('student')
    })
    it('Valid Student Register Test', function(){
        const rp = new RegisterPage()
        rp.visit()
        rp.clickOnNewRegistrationBtn()
        cy.title().should('be.equal', 'منـصــة تعليمى')
        rp.clickOnStudentBtn()
        rp.fillInFirstNameTextBox(this.student.firstname)
        rp.fillInLastNameTextBox(this.student.lastname)
        rp.fillInMobileNumberTextBox(this.student.mobilenumber)
        cy.scrollTo(0, 500)
        /*أنثى ; ذكر*/
        rp.clickOnGenderBtn(this.student.gender)
        rp.selectLevelDropDownList()
        rp.fillInPasswordTextBox(this.student.password)
        rp.fillInPasswordConfirmationTextBox(this.student.confirmpassword)
        rp.clickOnAgree()
        rp.clickOnSubmitBtn()
    })
})