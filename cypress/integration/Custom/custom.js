/// <reference types= "cypress" />

let time = 2000

describe ("Custom Comands use" , () => {
    it ("Visible texts comand", () => {

  //   before (() => {
        cy.visit("https://demoqa.com/automation-practice-form"),
        cy.title().should("eq", "ToolsQA")
        cy.log("page title is correct")

    //})

        cy.visible_texts("#userName", "Andres", 2000)

    }) 
    
})
