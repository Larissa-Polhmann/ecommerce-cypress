/// <reference types="cypress" />

Cypress.Commands.add('gui_login', (username, password) => {
    cy.get('#email').type(username)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
})