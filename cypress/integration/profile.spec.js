/// <reference types="Cypress" />
describe('プロフィールページ', () => {
  it('ラベルが表示されること', () => {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    cy.contains('みんなの洋楽ランキング')
  })

  describe('ポートフォリオ', () => {
    beforeEach(function() {
      cy.server()
      cy.route({
        method: 'GET',
        url: `/api/profile/portfolios`,
        response: 'fixture:portfolios.json'
      })
    })

    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
      cy.server({ enable: false })
    })

    it('ラベルにクリック出来ること', () => {
      cy.visit('https://festive-yonath-a04e1e.netlify.com/')
      cy.contains('みんなの洋楽ランキング').click()
    })

    it('ポートフォリオにクリックし、詳細画面へ遷移出来ること', () => {
      cy.visit('https://festive-yonath-a04e1e.netlify.com/')
      cy.get('.portfolio-item-caption')
        .first()
        .click()
      cy.url().should('include', '/portfolio/1')

      // 全ての要素をクリック。最後のアサーションのみ評価される（つまり/portfolio/1）は評価されない
      // cy.get('.portfolio-item-caption').click({ multiple: true })
      // cy.url().should('include', '/portfolio/4')
    })
  })
  describe('問合せ', () => {
    it('名前が正しく入力出来ること', () => {
      cy.visit('https://festive-yonath-a04e1e.netlify.com/')
      cy.get('.form-control')
        .first()
        .type('山田　太郎')
        .should('have.value', '山田　太郎')
    })
  })
})
