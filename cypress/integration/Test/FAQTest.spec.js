/// <reference types="Cypress" />

import FAQPage from '../Page/FAQPage'

describe('FAQ Suite', function() {

    it('FAQ Test', function(){
        // Initializing class instance of class FAQPage
        const faq = new FAQPage()
        // Calling needed test methods
        faq.visit()
        faq.clickOnFaqIcon()
        faq.clickOnFaq()
        faq.getQuestionTitles()
        faq.getQuestionContents()
    })
})