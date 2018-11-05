const { cy, before } = global;

describe('App', () => {
  before(() => {
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
