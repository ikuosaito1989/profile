export const state = () => ({
  portfolios: {}
})

export const actions = {
  async getPortfolios(context) {
    const portfolios = await this.$axios.$get('/api/profile/portfolios')
    context.commit('setPortfolios', { portfolios })
  }
}

export const mutations = {
  setPortfolios(state, { portfolios }) {
    state.portfolios = portfolios
  }
}

export const getters = {
  portfolios(state) {
    return state.portfolios
  }
}
