/// <reference types= "cypress" />

describe ("GET service" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      let data;
      it ("API POST", () => {
       
        cy.request ({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                 "id":2121,
                "name":"Andres Sierra",
                "email":"anres.sierra@cypresstest.io",
                "gender":"male",
                "status":"active"
            }
                
        }).then(response => {
           expect(response.status).to.equal(200)

        })

        it ("API POST - multiple values", () => {
            for (let x=1; x>=10; x++) {

            let text = Math.random().toString(10)
       
            cy.request ({
                method: "POST",
                url: "https://gorest.co.in/public/v2/users",
                body: {
                     "id":2121 + x,
                    "name":"Andres Sierra",
                    "email":"anres.sierra@cypresstest.io",
                    "gender":"male",
                    "status":"active"
                }
                    
            }).then(response => {
               expect(response.status).to.equal(200)
    
            })

            }

            }) 
    })
    
})