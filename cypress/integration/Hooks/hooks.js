/// <reference types= "cypress" />

let time = 2000

describe ("Uso de Hooks" , () => {

     before (() => {
        cy.visit ("https://opensource-demo.orangehrmlive.com/")
        cy.title ("equal", "OrangeHRM")
        cy.wait(time)
        cy.get('#txtUsername').should("be.visible").type("admin")
        cy.wait(time)
        cy.get('#txtPassword').should("be.visible").type("admin123")
        cy.wait(time)
        cy.get('#btnLogin').click({force:true})

    })

    after(() => {
        cy.log ("ejecucion de after")
        
    })
     it ("Uso de Hooks practica test 1", () => {
        cy.get('#menu_admin_viewAdminModule > b').should("be.visible").click({force:true})
        cy.wait(time)

    }) 
    it ("Uso de Hooks practica test 2", () => {
        cy.get('#searchSystemUser_userName').should("be.visible").type("Aaliyah Haq")
        cy.get('#searchBtn').click()
        cy.wait(time)

    })
    
    it ("Uso de Hooks practica test 3", () => {
    cy.get('#btnAdd').should("be.visible").click({force:true})
    cy.wait(time)

    }) 
    
})