/// <reference types="Cypress" />

import FAQPage from '../Page/FAQPage'

describe('FAQ Suite', function() {

    it('FAQ Test', function(){
        const faq = new FAQPage()
        faq.visit()
        faq.getQuestionTitles()
        faq.getQuestionContents()
    })
})