/// <reference types="cypress" />

describe('Teste funcional de Login', () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php")
    cy.get('.login').click()
  })

  it('Deve efeturar o login com sucesso', () => {
    cy.gui_login('lari.polhmann@gmail.com', 'teste123')
    cy.get('.account > span').should("have.text", "Larissa Polhmann")
  })

  it("Deve validar usuário incorreto", () => {
    cy.gui_login('teste_email_falso', 'teste123')
    cy.get('#center_column > :nth-child(2) > p').should("have.text", "There is 1 error")
  })

  it("Deve validar senha incorreta", () => {
    cy.gui_login('lari.polhmann@gmail.com', 'senha_incorreta')
    cy.get('#center_column > :nth-child(2) > p').should("have.text", "There is 1 error")
  })
})