/// <reference types= "cypress" />

let time = 2000

describe ("fixture carga de datos con mas archivos y masivamente" , () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
        
   /* before (function(){
        cy.fixture('datos').then(function(data){
            //this.data = data
            globalThis.data = data

        })  
    })*/ 

    it ("test ingreso de datos en el form desde JSON", () => {
        
        cy.fixture("datos2").then(testdata => {
            testdata.forEach(data => {
                const d_name = data.name
                const d_email = data.email
                const d_dir1 = data.dir1
                const d_dir2 = data.dir2

                cy.visit("https://demoqa.com/text-box")
                cy.title().should("eq","ToolsQA")
                cy.wait(time)

                cy.get('#userName').should("be.visible").type(d_name)
                cy.wait(time)
        
                cy.get('#userEmail').should("be.visible").type(d_email)
                cy.wait(time)
        
                cy.get('#currentAddress').should("be.visible").type(d_dir1)
                cy.wait(time)
                
                cy.get('#permanentAddress').should("be.visible").type(d_dir2)
                cy.wait(time)
        
                cy.get('#submit').should("be.visible").click({force:true})
            });
        })



    }) 
    
  
})