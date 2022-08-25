/// <reference types= "cypress" />

let time = 2000

describe ("Funcion invoke" , () => {
    it ("Reto Invoke", () => {
        cy.visit ("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        cy.log ("el titulo de la pagina es correcto")
        cy.wait(time)

        //ocultar elementos 

        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")

        cy.get('#firstname').should("be.visible").type("Andres").then(() =>  {

            cy.get('[for="surname"]').invoke("show", "8")
            cy.wait(time)
            cy.get('#surname').invoke("show", "6")
            cy.wait(time)

            cy.get('#surname').type("Sierra Corredor")

    

        } )

          }) 

    
})