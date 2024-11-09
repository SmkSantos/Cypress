

describe('CRUD de Colaborador', () => {

    beforeEach(() => {

        cy.visit('/');
        cy.get('.orangehrm-login-slot h5').should('have.text', 'Login')
        cy.login()
        cy.wait(2000);
    });

    it('Cadastro de Colaboradores - Simples', () => {

        cy.contains('span.oxd-main-menu-item--name', 'PIM')
            .should('have.text', 'PIM')
            .click();

        cy.contains('.orangehrm-background-container button', ' Add ')
            .should('have.text', ' Add ')
            .click()

        cy.contains('.oxd-topbar-body-nav-tab','Add Employee')
            .should('have.class','--visited')
        
        cy.contains('.oxd-layout-context h6', 'Add Employee')
            .should('have.text', 'Add Employee')
 
        // Alterar para a Faker First Name, para gerar nome aleatório
        let fName = 'First Employee'
        cy.get('[placeholder="First Name"]').type(fName)
        cy.get('[placeholder="First Name"]').should('have.value', fName)

        //alterar para a Faker Last name
        let lName = 'Last Name'
        cy.get('[placeholder="Last Name"]').type(lName);
        cy.get('[placeholder="Last Name"]').should('have.value', lName)
        //alterar para random

        let value = Math.floor(Math.random()* (999999 - 100000) + 100000 )
        cy.get('.oxd-grid-2 input').type(value)

        cy.contains('.orangehrm-card-container button',' Save ').should('have.text',' Save ').click()

        cy.get('.oxd-toast').should('be.visible');
        cy.get('#oxd-toaster_1 .oxd-toast-icon-wrap').should('have.class','oxd-toast-icon-wrap--success');
        cy.get('.oxd-toast .oxd-text--toast-title').should('have.text','Success')
        cy.get('.oxd-toast .oxd-text--toast-message').should('have.text','Successfully Saved')

        cy.get('body')
    });

});