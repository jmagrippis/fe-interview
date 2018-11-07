const { cy, before } = global;

describe('Transactions in Bills', () => {
  before(() => {
    cy.exec('cd server && yarn db:seed && cd ..')
      .its('code')
      .should('eq', 0);
    cy.exec('yarn waitForApi')
      .its('code')
      .should('eq', 0);
    cy.visit('/');
  });

  it('displays or hides its list of transactions once clicked', () => {
    cy.get('[data-qa="transactions-5a5caa1efe33900100fd8ed5"]').should(
      'not.exist'
    );

    cy.get('li:first').click();

    cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"]').should('exist');
    cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"] li').should(
      'have.length',
      5
    );

    cy.get('li:first').click();

    cy.get('[data-qa="transactions-5a5caa1efe33900100fd8ed5"]').should(
      'not.exist'
    );
  });

  it('displays the amount of each transaction', () => {
    cy.get('li:first').click();

    cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"] li:first').should(
      'contain',
      '£82.17'
    );
    cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"] li:last').should(
      'contain',
      '£82.17'
    );

    cy.get('li:first').click();
  });

  it('displays the date of each transaction in a DD/MM/YYYY format', () => {
    cy.get('li:first').click();

    cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"] li:first').should(
      'contain',
      '01/01/2018'
    );
    cy.get('[data-qa="transactions-5a5caa8efe33900100fd8ed6"] li:last').should(
      'contain',
      '01/05/2018'
    );

    cy.get('li:first').click();
  });
});
