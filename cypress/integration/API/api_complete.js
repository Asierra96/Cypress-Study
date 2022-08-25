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
            "country": "Colombia",
            "studies": [
                {
                    "name": "Cypress master en automatizacion",
                    "description": "Automation QA"
                },
                {
                    "name": "System Engineer",
                    "description": "Graduated in 2019"
                },
                {
                    "name": "Apium",
                    "description": "Mobile Automation QA"
                }
            ]
        }

        cy.log (data ["name"], data ["lastname"], data ["profession"], data ["country"] , data.studies)
        cy.log (data ["name"], data ["lastname"], data ["profession"], data ["country"] , data.studies[0].name,  
        data.studies[0].description)
        cy.log (data ["name"], data ["lastname"], data ["profession"], data ["country"] , data.studies[1].name, 
        data.studies[1].description)
        cy.log (data ["name"], data ["lastname"], data ["profession"], data ["country"] , data.studies[2].name, 
        data.studies[2].description)


    }) 
    
})