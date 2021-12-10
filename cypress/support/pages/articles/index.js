const el = require('./elements').ELEMENTS

const articleName = 'Título do artigo' + new Date().getTime()

class Articles {
  acessarFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição do artigo')
    cy.get(el.textareaBody).type('Corpo do artigo')
    cy.get(el.inputTagField).type('Tag do artigo')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeOArtigofoiCriado () {
    cy.contains('h1', articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
