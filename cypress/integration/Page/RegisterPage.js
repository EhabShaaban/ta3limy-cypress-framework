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

    selectLevelDropDownList()
    {
        /*
        console.log(value)
        cy.get('optgroup')
          .select(value).should('have.value', value)
        */

        /*
        // SHOULD BE QWORKING CODE
       cy.get('select[id="grade"]').then(function($select){
        $select.val(10)
        })
        //
        */

        /*
        cy.get('optgroup[label="الاعدادي"]').then(function($select){
            $select.val("8")
            })
        cy.get('optgroup[label="الاعدادي"]').should('have.value', "8")
        */
       
        
        //$('select option[value="10"]').attr("selected",true);
      //cy.get('[id=grade]').should('have.value', "10")
      

     
     //cy.get('[id=grade]')

           /*
        let level = 'الابتدائي'
        let optgroup = $('select optgroup[label="'+level+'"]')
        let option = optgroup.find('option[value="'+value+'"]')
        option.attr('selected', true)
           */

        //cy.get('[name=grade]').select(10)
        cy.get('select[id="grade"]').select('10', {force: true})
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

    clickOnAgree()
    {
        /*
        cy.get('div[class="css-1e4l3zp e1h2vq1b1"]')
        .invoke('attr', 'value', 'true')
        .should('have.attr', 'value', 'true')
        */
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