export const state = () => ({
  portfolios: [{}],
  selectedPortfolio: {}
})

export const actions = {
  async showPortfolios(context) {
    const portfolios = await this.$axios.$get('/api/profile/portfolios')
    context.commit('setPortfolios', { portfolios })
  },
  async selectPortfolio(context, { portfolioId }) {
    const portfolios = await this.$axios.$get(
      `/api/profile/portfolios/${portfolioId}`
    )
    context.commit('setSelectedPortfolio', { selectedPortfolio: portfolios[0] })
  }
}

export const mutations = {
  setPortfolios(state, { portfolios }) {
    state.portfolios = portfolios
  },
  setSelectedPortfolio(state, { selectedPortfolio }) {
    state.selectedPortfolio = selectedPortfolio
  }
}

export const getters = {
  portfolios(state) {
    return state.portfolios
  },
  selectedPortfolio(state) {
    return state.selectedPortfolio
  }
}
