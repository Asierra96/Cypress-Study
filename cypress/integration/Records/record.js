/// <reference types= "cypress" />
let time = 2000


describe ("Record test" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it ("recording my first test", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait (time)

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName').clear();
        cy.get('#userName').type('Andres Sierra');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('cypresstest@cypress.io');
        cy.get('#currentAddress').type('palo alto california street test');
        cy.get('#permanentAddress').type('california state');
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('RecordCheckbox', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/checkbox');
        cy.get('.rct-collapse > .rct-icon > path').click({force:true});
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-excelFile').check({force:true});
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-wordFile').check({force:true});
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get(':nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-workspace').check({force:true});
        cy.get(':nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-office').check({force:true});
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon').click();
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
        cy.get('#tree-node-desktop').check({force:true});
        /* ==== End Cypress Studio ==== */
    });
})