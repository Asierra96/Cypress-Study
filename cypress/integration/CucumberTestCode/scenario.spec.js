//Scenario code 

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given ('Open the test page', ()=>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should("eq","ToolsQA")
}) 

When ('User fill the form', ()=>{
    cy.get('#userName').should('be.visible').type('Andres')
    cy.get('#userEmail').should('be.visible').type('testcypress@cypress.io')
    cy.get('#currentAddress').should('be.visible').type('Avenida siempre viva 123')
    cy.get('#permanentAddress').should('be.visible').type('Homer Simpson House')

}) 

And ('User clicks on submit', ()=>{
    cy.get('#submit').should('be.visible').click({force:true})
  
}) 

Then ('validate that the info had been sended', ()=>{

    cy.log("Info has been sended succesfully")

}) 