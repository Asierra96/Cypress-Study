/// <reference types= "cypress" />

import 'cypress-file-upload'
require ('cypress-xpath');
require ('cypress-plugin-tab');

describe ("" , () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it ("", () => {
        
    }) 
    
})