/// <reference types="Cypress" />

import RegisterPage from '../Page/RegisterPage'

describe('Register as Student Suite', function() {

    it('Valid Student Register Test', function(){
        const rp = new RegisterPage()
        rp.visit()
        rp.clickOnNewRegistrationBtn()
        cy.title().should('be.equal', 'منـصــة تعليمى')

        rp.clickOnStudentBtn()
        cy.fixture('data').then((student)=>{
            rp.fillInFirstNameTextBox(student.firstname)
            rp.fillInLastNameTextBox(student.lastname)
            rp.fillInMobileNumberTextBox(student.mobilenumber)
        })
        cy.scrollTo(0, 500)
        /*أنثى ; ذكر*/
       cy.fixture('data').then((student)=>{
        rp.clickOnGenderBtn(student.gender)
        })
        rp.selectLevelDropDownList()
        cy.fixture('data').then((student)=>{
            rp.fillInPasswordTextBox(student.password)
            rp.fillInPasswordConfirmationTextBox(student.confirmpassword)
            })
        rp.clickOnAgree()
        rp.clickOnSubmitBtn()
    })
})