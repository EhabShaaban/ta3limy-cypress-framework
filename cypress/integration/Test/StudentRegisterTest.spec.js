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
        rp.fillInFirstNameTextBox(this.student.student[0].firstname)
        rp.fillInLastNameTextBox(this.student.student[0].lastname)
        rp.fillInMobileNumberTextBox(this.student.student[0].mobilenumber)
        rp.clickOnGenderBtn(this.student.student[0].gender)
        rp.selectLevelDropDownList()
        rp.fillInPasswordTextBox(this.student.student[0].password)
        rp.fillInPasswordConfirmationTextBox(this.student.student[0].confirmpassword)
        rp.clickOnAgreeCheckBox()
        rp.clickOnSubmitBtn()
    })
    it('Invalid Student Register Test', function(){
        /*  This test uses second data object of student
            enters Invalid mobile number formate
            and wrong password confirmation 
        */
        const rp = new RegisterPage()
        rp.visit()
        rp.clickOnNewRegistrationBtn()
        cy.title().should('be.equal', 'منـصــة تعليمى')
        rp.clickOnStudentBtn()
        rp.fillInFirstNameTextBox(this.student.student[1].firstname)
        rp.fillInLastNameTextBox(this.student.student[1].lastname)
        rp.fillInMobileNumberTextBox(this.student.student[1].mobilenumber)
        rp.clickOnGenderBtn(this.student.student[1].gender)
        rp.selectLevelDropDownList()
        rp.fillInPasswordTextBox(this.student.student[1].password)
        rp.fillInPasswordConfirmationTextBox(this.student.student[1].confirmpassword)
        rp.clickOnAgreeCheckBox()
        rp.clickOnSubmitBtn()
    })
})