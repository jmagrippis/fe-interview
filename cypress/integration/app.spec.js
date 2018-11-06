const { cy, before } = global;

describe('App', () => {
  before(() => {
    cy.exec('cd server && yarn db:seed && cd ..')
      .its('code')
      .should('eq', 0);
    cy.exec('yarn waitForApi')
      .its('code')
      .should('eq', 0);
    cy.visit('/');
  });

  it('loads', () => {
    cy.title().should('equal', 'Cleo: Bills');
  });

  it('has tabs that navigate to their respective pages', () => {
    cy.get('nav a:nth-child(2)').click();

    cy.title().should('equal', 'Cleo: Potential Bills');

    cy.get('nav a:first').click();

    cy.title().should('equal', 'Cleo: Bills');
  });
});
