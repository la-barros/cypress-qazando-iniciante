/// <reference types ="cypress" />


export default {

    clicarLogin() {
        cy.get('#btnLogin').click()
    },

    validarMenssagemErro(mensagem) {
        cy.get('.invalid_input').should('be.visible')
            .should('have.text', mensagem)
    },

    preencherEmail(email) {
        cy.get('#user').type(email)
    },

    preencherSenha(senha) {
        cy.get('#password').type(senha)
    },

    validarMenssagemSucesso(email) {

        cy.get('#swal2-title').should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container').should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }

}