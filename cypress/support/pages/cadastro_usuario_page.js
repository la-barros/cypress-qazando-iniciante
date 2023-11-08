/// <reference types ="cypress" />

export default {

    clicarCadastrar() {

        cy.get('#btnRegister').click()
    },

    validarMesangemErro(mensagem) {

        cy.get('.errorLabel').should('be.visible')
            .should('have.text', mensagem)

    },

    prrencherNome(nome) {

        cy.get('#user').type(nome)

    },

    prencherEmail(email) {

        cy.get('#email').type(email)
    },

    preencherSenha(senha) {

        cy.get('#password').type(senha)

    },

    validarMesangemSucesso(nome) {

        cy.get('#swal2-title').should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container').should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)

    }
}