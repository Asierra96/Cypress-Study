/// <reference types= "cypress" />

let time = 2000

describe ("fixture carga de datos" , () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
        
    before (function(){
        cy.fixture('datos').as("infoUsuarios") //alias del archivo 

        })  
    })

    it ("test ingreso de datos en el form desde JSON", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
        cy.wait(time)

        cy.get("@infoUsuarios").then((datos) => {

            cy.get('#userName').should("be.visible").type(data.name)
            cy.wait(time)
    
            cy.get('#userEmail').should("be.visible").type(data.email)
            cy.wait(time)
    
            cy.get('#currentAddress').should("be.visible").type(data.dir1)
            cy.wait(time)
            
            cy.get('#permanentAddress').should("be.visible").type(data.dir2)
            cy.wait(time)
    
            cy.get('#submit').should("be.visible").click({force:true})

        })

       

    })
 
    
  
