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

  describe('bill', () => {
    it('displays its name', () => {
      cy.get('li:first').should('contain', 'Sky TV');
      cy.get('li:last').should('contain', 'TFL');
    });

    it('displays its transaction count', () => {
      cy.get('li:first').should('contain', '5');
      cy.get('li:last').should('contain', '5');
    });

    it('displays its list of transactions once clicked', () => {
      cy.get('[data-qa="transactions-5a5caa1efe33900100fd8ed5"]').should(
        'not.exist'
      );

      cy.get('li:first').click();

      cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"]').should(
        'exist'
      );
      cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"] li').should(
        'have.length',
        5
      );
    });
  });
});
