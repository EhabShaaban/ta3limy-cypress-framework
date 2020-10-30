/// <reference types="Cypress" />

class FAQPage
{
    visit()
    {
        cy.visit("https://www.ta3limy.com/faq");
        return this
    }
    getQuestionTitles()
    {
        cy.fixture('question_titles').then((questions) => {
            cy.get('p[class="css-olkrgj e1n5lxyo0"]').should('have.text', questions.titles)
          })
        return this
    }
    getQuestionContents()
    {
        /*
        cy.get('div[class="Collapsible__contentInner"]').then(function($elem) {
            const content = cy.log($elem.text())
            cy.writeFile('/home/ehab/ta3limy_script/cypress/fixtures/question_contents.json', {contents:content})
       })
       */
       cy.fixture('question_contents').then((questions) => {
        cy.get('div[class="Collapsible__contentInner"]').should('have.text', questions.contents)
      })
        return this
    }
}
export default FAQPage