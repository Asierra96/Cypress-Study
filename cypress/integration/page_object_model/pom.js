import proyectoPO from '../../support/pageObjects/proyectoPO/proyectoPO'
/// <reference types= "cypress" />

describe ("page object models ejercicio" , () => {
    
    const master = new proyectoPO()

    master.visitPage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
        
    it ("test ingreso de datos en el form", () => {
        master.IngresoDatosUno()
        cy.log("ejecucion exitosa")
        
    }) 
    
    it ("segundo test ingreso de datos en el form", () => {
        master.IngresoDatosDos()
        cy.log("ejecucion exitosa")
        
    }) 
    it ("tercer test ingreso de datos errados en el form", () => {
        master.IngresoDatosErrados()
        cy.log("ejecucion exitosa")
        
    }) 
})