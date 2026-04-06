# language: pt

Funcionalidade: Login e Administração de Livros

  Como usuário do sistema
  Quero acessar e gerenciar livros
  Para manter o catálogo atualizado

  # ✅ POSITIVOS

  Cenário: Login como administrador
    Dado que eu estou na página de login
    Quando eu faço login com email "admin@biblioteca.com" e senha "admin123"
    Então devo ver o painel administrativo

  Cenário: Adicionar livro com sucesso
    Dado que eu estou logado como administrador
    E estou na página de administrador de livros
    Quando eu adiciono um livro válido
    Então deve aparecer a mensagem "Livro adicionado com sucesso!"

  # ❌ NEGATIVOS

  Cenário: Login inválido
    Dado que eu estou na página de login
    Quando eu faço login com email ou senha inválidas
    Então deve aparecer uma mensagem de erro 

  Cenário: Adicionar livro sem preencher campos
    Dado que eu estou logado como administrador
    E estou na página de administrador de livros
    Quando eu tento adicionar um livro sem preencher os campos
    Então deverá aparecer uma mensagem de erro 