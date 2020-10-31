/// <reference types="Cypress" />

class FAQPage
{   /**
    Visit https://www.ta3limy.com/faq
    */
    visit()
    {
        cy.visit("https://www.ta3limy.com/faq");
        return this
    }
    /**
     * Compare page question titles data against same data saved on JSON file
     */
    getQuestionTitles()
    {   
        // Read file question_titles.json
        // Saved under ../ta3limy_script/cypress/fixtures
        cy.fixture('question_titles').then((questions) => {
            // Select all page question titles it should be the same as in JSON
            cy.get('p[class="css-olkrgj e1n5lxyo0"]').should('have.text', questions.titles)
          })
        return this
    }
    getQuestionContents()
    {
       // Logging question contents to screen to catch them & save them in a JSON file 
        //cy.get('div[class="Collapsible__contentInner"]').then(function($elem) {
            //const content = cy.log($elem.text())
            //cy.writeFile('/home/ehab/ta3limy_script/cypress/fixtures/question_contents.json', {contents:content})
       //})
       // Read file question_contents.json
       cy.fixture('question_contents').then((questions) => {
        // Select all page question contents, it should be the same as in the previously JSON file
        cy.get('div[class="Collapsible__contentInner"]').should('have.text', questions.contents)
      })
        return this
    }
}
export default FAQPage