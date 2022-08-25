/// <reference types= "cypress" />

let time = 2000

describe ("Funcion invoke" , () => {
    it ("Caso de funcion invoke text", () => {
        cy.visit ("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        cy.log ("el titulo de la pagina es correcto")
        cy.wait(time)

        // validacion de texto con funcion invoke
        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")

        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation")
        cy.log("validacion exitosa de texto")

        //validacion de campos del form 

        cy.get('[for="firstname"]').invoke("text").as("first_name")
        cy.wait(time)
        cy.get("@first_name").should("contain","First name:").then(() => {
            cy.get('#firstname').type("Andres Felipe")
        } )
    }) 

    
})