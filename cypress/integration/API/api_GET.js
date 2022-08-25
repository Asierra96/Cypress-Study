/// <reference types= "cypress" />

describe ("GET service" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    let data; 
    it ("API GET", () => {
       
        data= cy.request ("https://gorest.co.in/public/v2/users")

        data.its("status").should('eq', 200)
    

    }) 
    it ("API GET other way to validate a success response", () => {
       
        data= cy.request ("https://gorest.co.in/public/v2/users")

        .should((response) => {
            expect (response.status).to.equal(200)
        } )
    

    }) 

    it ("API GET other parametrization", () => {
       
        data= cy.request ({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body
            body= JSON.parse(JSON.stringify(response.body))

            cy.log(body)

            expect(body[0]).has.property("name", "Anjushri Pothuvaal")
        })
    

    }) 
    
})