import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"

beforeEach(() => {
    cy.login('admin@biblioteca.com', 'admin123')
});

Given (`que eu estou na página de administrador de livros`,() => {
    cy.visit('admin-books.html')
    cy.get('h1').should('contain', 'Gerenciar Livros')
});

When (`eu adiciono um novo livro com os dados obrigatórios`, () => {
    cy.adicionarLivro('Livro teste', 'Autor Teste', 'Aventura', 2)
});

Then (`deve aparecer uma mensagem: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

Given(`existe um livro listado no catálogo`, () => {
    cy.adicionarLivro('Livro para manipular', 'Autor Teste', 'Aventura', 2)
    cy.get('#search-input').type('Livro para manipular')
    cy.wait(5000)
});

When(`eu edito os detalhes do livro`, () => {
    cy.get(':nth-child(7) > .btn-outline-primary').click()
    cy.wait(5000)
    cy.get('#book-category').select('Aventura')
    cy.get('#save-book-btn').click()
});

Then(`deve aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

When(`eu removo o livro do catálogo`, () => {
    cy.get(':nth-child(7) > .btn-outline-danger').click()
    cy.get('#confirm-delete-btn').click()
});

Then (`deve aparecer uma mensagem de exclusão: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
})

When("eu adiciono novos livros com os seguintes dados:", (dataTable) => {
    const books = dataTable.hashes()
    books.forEach(book => {
        cy.adicionarLivro(book.título, book.autor, book.categoria, book.exemplares)
    })
});

When(`eu adiciono um livro com {string}, {string}, {string} e {string}`, (título, autor, categoria, exemplares) => {
    cy.adicionarLivro(título, autor, categoria, exemplares)
});