/// <reference types= "cypress" />

let time = 2000

describe ("ejercicios con Alias Cypress" , () => {

    it ("Alias expample 1", () => {
       cy.visit ("https://testpages.herokuapp.com/styled/validation/input-validation.html")
       cy.title().should("eq","Input Validation")
       cy.log ("el titulo de la pagina es correcto")
       cy.wait(time)

       cy.get('#firstname').should("be.visible").as("nombre")
       cy.get('#surname').should("be.visible").as("apellido")
       cy.get('#age').should("be.visible").as("edad")
       cy.get('#country').should("be.visible").as("pais")
       cy.get('#notes').should("be.visible").as("notas")

       cy.get("@nombre").type("Andrés")
       cy.wait(time)
       cy.get("@apellido").type("Sierra Corredor")
       cy.get("@edad").type("26")
       cy.get("@pais").select("Israel").should("have.value", "Israel")
       cy.get("@notas").type("cypress automation")

       //envio de informacion 

       cy.get('[type="submit"]').click()
    }) 
    
})