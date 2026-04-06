            #language: pt

            Funcionalidade: Administração de livros Hub de Leitura
            Como administrador do sistema
            Quero adicionar, editar e remover múltiplos livros de uma só vez
            Para que eu possa gerenciar o catálogo de forma rápida e eficiente

            Cenário: Adicionar novos livros com tabelas de exemplos
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono novos livros com os seguintes dados:
            | título           | autor         | categoria | exemplares |
            | Livro de teste 1 | Autor teste 1 | Aventura  | 2          |
            | Livro de teste 2 | Autor teste 2 | Infantil  | 30         |
            | Livro de teste 3 | Autor teste 3 | Romance   | 300        |
            | Livro de teste 4 | Autor teste 1 | Aventura  | 2          |
            | Livro de teste 5 | Autor teste 2 | Infantil  | 30         |
            | Livro de teste 6 | Autor teste 3 | Romance   | 300        |
            Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"
            
            Esquema do Cenário: Adicionar Livros usando esquema do cenário - Livro: "<título>", Qtd de exemplares: "<exemplares>"
            Dado que eu estou na página de administrador de livros
            Quando eu adiciono um livro com "<título>", "<autor>", "<categoria>" e "<exemplares>"
            Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

            Exemplos:
            | título                           | autor                         | categoria  | exemplares |
            | Livro de teste 1                 | Autor teste 1                 | Aventura   | 2          |
            | Li                               | Autor teste 2                 | Infantil   | 30         |
            | Livro de teste com nome enorme 3 | Autor teste 3                 | Romance    | 300        |
            | Livro de teste 4                 | Autor teste com nome enorme 4 | Biografia  | 27         |
            | Livro de teste 5                 | A                             | Tecnologia | 541        |
            | Livro de teste 6                 | Autor teste 6                 | Terror     | 3000       |