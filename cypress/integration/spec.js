describe('page', () => {
  before(() => {
    cy.visit('/');
  });

  it('works in v3.4, fails in v3.5', () => {
    cy.get('#btn-1').click();
    cy.wait(3000);
    cy.get('#btn-2').click();
  });

  it('works in v3.4 and v3.5', () => {
    cy.get('#btn-1').click().trigger('mouseout', { force: true });
    cy.wait(3000);
    cy.get('#btn-2').click();
  });
});
