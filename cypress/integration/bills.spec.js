const { cy, before } = global;

describe('Bills tab', () => {
  before(() => {
    cy.visit('/');
  });

  it('loads', () => {
    cy.title().should('equal', 'Cleo: Bills');
  });
});
