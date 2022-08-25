/// <reference types= "cypress" />

let time = 2000

describe ("navegacion" , () => {
    it ("Ejercicio navegacion", () => {
        cy.visit ("https://demoqa.com")
        cy.title().should("eq","ToolsQA")
        cy.log ("el titulo de la pagina es correcto")
        cy.wait(time)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').click()

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click({force:true})
        cy.go("back")
       // cy.get('#userName').type("Andres Sierra")
       // cy.get('#userEmail').type("andrestest@test.com")
    

          }) 
})