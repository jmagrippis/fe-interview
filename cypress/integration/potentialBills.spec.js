const { cy, before } = global;

describe('Bills tab', () => {
  before(() => {
    cy.exec('cd server && yarn db:seed && cd ..')
      .its('code')
      .should('eq', 0);
    cy.exec('yarn waitForApi')
      .its('code')
      .should('eq', 0);
    cy.visit('/potential/');
  });

  it('loads', () => {
    cy.title().should('equal', 'Cleo: Potential Bills');
  });

  it('shows a list of all potential bills', () => {
    cy.get('li').should('have.length', 3);
  });

  describe('pending bill', () => {
    it('removes the pending bill when clicking the relevant button', () => {
      cy.get('li').should('have.length', 3);

      cy.get('li:first button').click();

      cy.get('li').should('have.length', 2);
    });
  });
});
