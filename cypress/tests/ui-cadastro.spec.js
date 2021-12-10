///  <reference types="cypress"/>

describe('Cadastro', () => {
  it('Cadastro com Sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('chapterV9999')
    cy.get('input[placeholder="Email"]').type('chapterV9999@mail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.contains('button', 'Sign up').click()
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente.json'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('chapterV9999')
    cy.get('input[placeholder="Email"]').type('chapterV9999@mail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.contains('button', 'Sign up').click()
    cy.contains('li', 'username has already been taken').should('be.visible')
  })

  it('Email já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-email-existente.json'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('chapterV9999')
    cy.get('input[placeholder="Email"]').type('chapterV9999@mail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.contains('button', 'Sign up').click()
    cy.contains('li', 'email has already been taken').should('be.visible')
  })

  it('Sem email informado', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-sem-email.json'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Username"]').type('chapterV9999')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.contains('button', 'Sign up').click()
    cy.contains('li', "email can't be blank").should('be.visible')
  })

  it('Sem usuario informado', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-sem-usuario.json'

    }).as('postUsers')

    cy.visit('register')

    cy.get('input[placeholder="Email"]').type('chapterV9999@mail.com')
    cy.get('input[placeholder="Password"]').type('123456')

    cy.contains('button', 'Sign up').click()
    cy.contains('li', "username can't be blank").should('be.visible')
  })
})
