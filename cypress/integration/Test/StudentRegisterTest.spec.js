/// <reference types="Cypress" />

import RegisterPage from '../Page/RegisterPage'

describe('Register as Student Suite', function() {
    // Loading JSON before each test
    // JSON file under ../ta3limy_script/cypress/fixtures
    beforeEach(function(){
        cy.fixture('data').as('student')
    })
    it('Valid Student Register Test', function(){
        /**
         * This test is designed to pass against creating
         * new student on https://www.ta3limy.com/register
         */
        // Initializing class instance of class RegisterPage
        const rp = new RegisterPage()
        // Calling needed test methods
        rp.visit()
        rp.clickOnNewRegistrationBtn()
        // Asserting on registration page title
        cy.title().should('be.equal', 'منـصــة تعليمى')
        rp.clickOnStudentBtn()
        // Using first JSON element on "student" to run valid test
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
       /**
        * This test is designed to fail against creating
        * new student on https://www.ta3limy.com/register
        * by filling in invalid mobile number formate
        * and wrong password confirmation
        */
        // Initializing class instance of class RegisterPage
        const rp = new RegisterPage()
        rp.visit()
        rp.clickOnNewRegistrationBtn()
        cy.title().should('be.equal', 'منـصــة تعليمى')
        rp.clickOnStudentBtn()
        // Using second JSON element on "student" to run invalid test
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