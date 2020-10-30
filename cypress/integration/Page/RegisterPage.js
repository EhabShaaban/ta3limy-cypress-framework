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
        /*
        const genderType = cy.get('[id=male]')
        .invoke('attr', 'style', 'display: none')
        .should('have.attr', 'style', 'display: none')
        genderType.click()
        */
        //cy.get('[id=male]')
        /*
        let str1 = "'#"
        let str2 = value
        console.log(value)
        let str3 = "'"
        let dynValue = str1.concat(str2, str3)
        console.log(dynValue)
        */
        //cy.get('#male')
        cy.contains(value)
        //.invoke('attr', 'style', 'display: none')
        //.should('have.attr', 'style', 'display: none')
        .click({force: true })
        return this
    }
    //

    selectLevelDropDownList(value)
    {
        /*
        console.log(value)
        cy.get('optgroup')
          .select(value).should('have.value', value)
        */
       cy.get('select').then(function($select){
        $select.val(value)
      })
      cy.get('select').should('have.value', value)
        return this
    }

    //
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

}
export default RegisterPage