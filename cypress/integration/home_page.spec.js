describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.server()

    cy.route({
      method: 'GET',
      url: `/api/profile/portfolios`,
      response: 'fixture:portfolios.json'
    })
    cy.visit('/') // change URL to match your dev URL
    cy.server({ enable: false })
  })
})
