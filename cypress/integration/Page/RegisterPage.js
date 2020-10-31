/// <reference types="Cypress" />

class RegisterPage
{
    /**
    Visit https://www.ta3limy.com/
    */
    visit()
    {
        cy.visit("https://www.ta3limy.com/");
    }
    /**
     * Fetch & click on new register
     */
    clickOnNewRegistrationBtn()
    {
        cy.get('div').contains('تسجيل حساب').click()
        return this
    }
    /**
     *  Fetch & click on student button
     */
    clickOnStudentBtn()
    {
        cy.get('label').contains('طالب').click()    
        return this
    }
    /**
     * Fetch & fill in first name
     * @param {String} value 
     */
    fillInFirstNameTextBox(value)
    {
        const firstNameTextBox = cy.get('[id=firstName]')
        // Clear text box
        firstNameTextBox.clear()
        // Type data into text-field
        firstNameTextBox.type(value)
        return this
    }
    /**
     * Fetch & fill in last name
     * @param String value 
     */
    fillInLastNameTextBox(value)
    {
        const lastNameTextBox = cy.get('[id=lastName]')
        // Clear text box
        lastNameTextBox.clear()
        // Type data into text-field
        lastNameTextBox.type(value)
        return this
    }
    /**
     * Fetch & fill in mobile number
     * @param {String} value 
     */
    fillInMobileNumberTextBox(value)
    {
        const mobileNumberTextBox = cy.get('[id=mobileNumber]')
        // Clear text box
        mobileNumberTextBox.clear()
        // Type data into text-field
        mobileNumberTextBox.type(value)
        return this
    }
    /**
     * Fetch & click on gender button
     * @param {String} value 
     */
    clickOnGenderBtn(value)
    {
        cy.contains(value)
        .click({force: true })
        return this
    }
    /**
     * Fetch & select educational grade
     */
    selectLevelDropDownList()
    {
        cy.get('select[id="grade"]').select('11', {force: true})
        return this
    }
    /**
     * Fetch & fill in password
     * @param {String} value 
     */
    fillInPasswordTextBox(value)
    {
        // Fetch element and make it constant
        const passwordTextBox = cy.get('#password')
        // Clear text box
        passwordTextBox.clear({force: true})
        // Type data into text-field
        passwordTextBox.type(value)
        return this
    }
    /**
     * Fetch & fill in password confirmation
     * @param {String} value 
     */
    fillInPasswordConfirmationTextBox(value)
    {
        // Fetch element and make it constant
        const passwordConfirmationTextBox = cy.get('#passwordConfirmation')
        // Clear text box
        passwordConfirmationTextBox.clear({force: true})
        // Type data into text-field
        passwordConfirmationTextBox.type(value)
        return this
    }
    /**
     * Fetch & click on agree check box
     */
    clickOnAgreeCheckBox()
    {
       cy.get('input[id="termsAndConditionsCheck"]').click({force: true})
       return this
    }
    /**
     * Fetch & click on submit button
     */
    clickOnSubmitBtn()
    {
        cy.get('button[type="submit"]').click({force: true})
        return this
    }
}
export default RegisterPage