/// <reference types ="cypress" />

export default {

    acessarPaginaLogin() {
        cy.visit('/').get('.logo')

        cy.get('.fa-user').click()

        cy.get('.mobile-menu-logo')
            .should('be.visible')

    },

    acessarPAginaCadastro() {

        cy.visit('/').get('.logo')
        
        cy.get('.fa-lock').click()

        cy.get('.mobile-menu-logo')
            .should('be.visible')

    }

}