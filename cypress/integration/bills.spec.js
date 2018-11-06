const { cy, before } = global;

describe('Bills tab', () => {
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

    it('displays or hides its list of transactions once clicked', () => {
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

      cy.get('li:first').click();

      cy.get('[data-qa="transactions-5a5caa1efe33900100fd8ed5"]').should(
        'not.exist'
      );
    });

    it('removes the bill when clicking the relevant button', () => {
      cy.get('li').should('have.length', 6);

      cy.get('li:first button').click();

      cy.get('li').should('have.length', 5);
    });
  });
});
