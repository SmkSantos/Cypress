
describe('Funcionalidade de Login', () => {

    beforeEach(() => {

        cy.visit('/');
        cy.get('.orangehrm-login-slot h5').should('have.text', 'Login')

    });
    it('Login com credenciais válidas', () => {

        cy.login()
        cy.get('.oxd-topbar-header-breadcrumb H6').should('have.text', 'Dashboard');

    });

    it('Login com credenciais inválidas', () => {

        cy.get('[name="username"]').type('Admin1');
        cy.get('[name="password"]').type('admin1234');
        cy.get('.orangehrm-login-action [type= "submit"]').click();

        cy.get('.orangehrm-login-error .oxd-alert-content--error .oxd-alert-content-text')
            .should('have.text', 'Invalid credentials');

    });

    it('Login sem campos obrigatórios', () => {

        cy.get('.orangehrm-login-action [type= "submit"]').click();

        cy.get('.oxd-form-row .oxd-input-field-error-message').should('have.text', 'RequiredRequired');

    });

});