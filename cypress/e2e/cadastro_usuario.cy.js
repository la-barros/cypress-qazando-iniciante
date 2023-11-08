/// <reference types ="cypress" />

import {faker} from '@faker-js/faker'
import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page';


beforeEach('Acessar página de login', () => {
    
    commum_page.acessarPAginaCadastro()
});

describe('Cadastro de usuário', () => {
    it('Campo nome vazio', () => {
        
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMesangemErro('O campo nome deve ser prenchido')

    });
    
    it('Campo email vazio', () => {


        cadastro_usuario_page.prrencherNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMesangemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo email inválido', () => {
        
        cadastro_usuario_page.prrencherNome(faker.person.fullName())
        cadastro_usuario_page.prencherEmail(faker.person.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMesangemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo senha vazio', () => {

        cadastro_usuario_page.prrencherNome(faker.person.fullName())
        cadastro_usuario_page.prencherEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMesangemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Campo senha inválido', () => {
        
        cadastro_usuario_page.prrencherNome(faker.person.fullName())
        cadastro_usuario_page.prencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMesangemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_usuario_page.prrencherNome(name)
        cadastro_usuario_page.prencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMesangemSucesso(name)
        
    });
});