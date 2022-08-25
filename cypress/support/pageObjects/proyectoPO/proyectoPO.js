/// <reference types= "cypress" />

class proyectoPO {

    visitPage () {
        let time = 2000
        before(()=> {
            cy.visit("https://demoqa.com/automation-practice-form")
            cy.title().should('eq','ToolsQA')
            cy.wait(time)
    })
    }

    IngresoDatosUno() {
        let time = 2000
        cy.get('#firstName').clear().should('be.visible').type("Andres")
        cy.get('#lastName').clear().should('be.visible').type("Sierra")
        cy.get('#userEmail').clear().should('be.visible').type("andres_test@test.io")
        cy.get('#gender-radio-1').check({force:true})
    }

    IngresoDatosDos() {
        let time = 2000
        cy.get('#userNumber').clear().should('be.visible').type("300123456789")
        //cy.get('#dateOfBirthInput').clear().should('be.visible').type("21 septiembre 1996")
        cy.get('.subjects-auto-complete__value-container').should('be.visible').type("software testing and automation")
        cy.get('#hobbies-checkbox-1').check({force:true})
        cy.get('#currentAddress').should('be.visible').type("avenida siempre viva 123")
        cy.get('#state > .css-yk16xz-control').click()
    }

    IngresoDatosErrados(){
        let time = 2000
        cy.get('#firstName').clear().should('be.visible').type("123%%&&&")
        cy.get('#lastName').clear().should('be.visible').type("123felipe")
        cy.get('#userEmail').clear().should('be.visible').type("andres_testtest.io")
        cy.get('#gender-radio-1').check({force:true})
        cy.get('#submit').click({force:true})
    }
}

export default proyectoPO;