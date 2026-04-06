import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("que eu estou na página de login", () => {
  cy.visit('/login.html')
})

When("eu faço login com email {string} e senha {string}", (email, senha) => {
  cy.login(email, senha)
})

Then("devo ver o painel administrativo", () => {
  cy.contains('Painel Administrativo').should('be.visible')
})

Then("deve aparecer a mensagem de erro {string}", (mensagem) => {
  cy.validarMensagem(mensagem)
})

When("eu faço login com email ou senha inválidas", () => {

  cy.get('#email')
    .should('be.visible')
    .clear()
    .type('erro@email.com')

  cy.get('#password')
    .should('be.visible')
    .clear()
    .type('123456')

  cy.get('#login-btn').click()
})

Then("deve aparecer uma mensagem de erro", () => {

  cy.get('#alert-container', { timeout: 10000 })
    .should('not.have.class', 'd-none')
    .and('be.visible')
})


Given("que eu estou logado como administrador", () => {
  cy.login('admin@biblioteca.com', 'admin123')
})

Given("estou na página de administrador de livros", () => {
  cy.visit('/admin-books.html')
  cy.contains('Gerenciar Livros').should('be.visible')
})

When("eu adiciono um livro válido", () => {
  cy.adicionarLivro(
    `Livro Cypress ${Date.now()}`,
    'QA Teste',
    'Aventura',
    5
  )
})

When("eu tento adicionar um livro sem preencher os campos", () => {
  cy.get('.btn-success').click()
  cy.get('#save-book-btn').click()
})


Then("deve aparecer a mensagem {string}", (mensagem) => {
  cy.validarMensagem(mensagem)
})

Then("deverá aparecer uma mensagem de erro", () => {

  cy.url().should('include', 'admin-books') // não saiu da tela
})