/// <reference types="Cypress" />

class RegisterPage
{
    visit()
    {
        cy.visit("https://www.ta3limy.com/");
    }
    clickOnNewRegistrationBtn()
    {
        cy.get('div').contains('تسجيل حساب').click()
        return this
    }
    clickOnStudentBtn()
    {
        cy.get('label').contains('طالب').click()    
        return this
    }
    fillInFirstNameTextBox(value)
    {
        const firstNameTextBox = cy.get('[id=firstName]')
        firstNameTextBox.clear()
        firstNameTextBox.type(value)
        return this
    }
    fillInLastNameTextBox(value)
    {
        const lastNameTextBox = cy.get('[id=lastName]')
        lastNameTextBox.clear()
        lastNameTextBox.type(value)
        return this
    }
    fillInMobileNumberTextBox(value)
    {
        const mobileNumberTextBox = cy.get('[id=mobileNumber]')
        mobileNumberTextBox.clear()
        mobileNumberTextBox.type(value)
        return this
    }
    clickOnGenderBtn(value)
    {
        cy.contains(value)
        .click({force: true })
        return this
    }
    selectLevelDropDownList()
    {
        cy.get('select[id="grade"]').select('10', {force: true})
        return this
    }
    fillInPasswordTextBox(value)
    {
        const passwordTextBox = cy.get('#password')
        passwordTextBox.clear({force: true})
        passwordTextBox.type(value)
        return this
    }
    fillInPasswordConfirmationTextBox(value)
    {
        const passwordConfirmationTextBox = cy.get('#passwordConfirmation')
        passwordConfirmationTextBox.clear({force: true})
        passwordConfirmationTextBox.type(value)
        return this
    }
    clickOnAgree()
    {
       cy.get('input[id="termsAndConditionsCheck"]').click({force: true})
       return this
    }
    clickOnSubmitBtn()
    {
        cy.get('button[type="submit"]').click({force: true})
        return this
    }
}
export default RegisterPage