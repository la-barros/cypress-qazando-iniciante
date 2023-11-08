/// <reference types ="cypress" />

    import {faker} from '@faker-js/faker'
    import commum_page from '../support/pages/commum_page'
    import loginPage from '../support/pages/login_page'
describe('Login', () => {

    before('Acessar página de login', () => {
    
        commum_page.acessarPaginaLogin()
    });

    it('Email vazio', () => {
        loginPage.clicarLogin()
        loginPage.validarMenssagemErro('E-mail inválido.')
    }); 

    it('Senha vazio', () => {

        loginPage.preencherEmail(faker.internet.email())
        loginPage.clicarLogin()
        loginPage.validarMenssagemErro('Senha inválida.')
    });

    it.only('Senha inválida', () => {

        loginPage.preencherEmail(faker.internet.email())
        loginPage.preencherSenha('123')
        loginPage.clicarLogin()
        loginPage.validarMenssagemErro('Senha inválida.')
    });

    it.only('Login com sucesso', async () => {

        const email = await faker.internet.email()
        
        loginPage.preencherEmail(email)
        loginPage.preencherSenha('123456')
        loginPage.clicarLogin()
        loginPage.validarMenssagemSucesso(email)
    });
});