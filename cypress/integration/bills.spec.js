const { cy, before } = global;

describe('Bills tab', () => {
  before(() => {
    cy.visit('/');
  });

  it('loads', () => {
    cy.title().should('equal', 'Cleo: Bills');
  });

  it('shows a list of all actual bills', () => {
    cy.get('li').should('have.length', 6);
  });

  it('each bill displays its name', () => {
    cy.get('li:first').should('contain', 'Sky TV');
    cy.get('li:last').should('contain', 'TFL');
  });
});
