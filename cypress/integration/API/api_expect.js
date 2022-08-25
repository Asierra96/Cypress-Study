/// <reference types= "cypress" />

describe ("GET service" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      let data;
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
            expect(body[0]).has.property("email", "pothuvaal_anjushri@wyman-macgyver.info")

        })
    

    }) 
    
})