/// <reference types= "cypress" />

describe ("Rest API" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it ("API activity", () => {
        const data = {
            "name": "Andres",
            "lastname": "Sierra",
            "profession": "Software QA Engineer", 
            "country": "Colombia"
        }

        cy.log (data ["name"], data ["lastname"], data ["profession"], data ["country"] )
    }) 
    
})