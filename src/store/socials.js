export const state = () => ({
  socials: {}
})

export const actions = {
  async showSocials(context) {
    const socials = await this.$axios.$get('/api/profile/socials')
    context.commit('setSocials', { socials })
  }
}

export const mutations = {
  setSocials(state, { socials }) {
    state.socials = socials
  }
}

export const getters = {
  socials(state) {
    return state.socials
  }
}
