export const state = () => ({
  deliveryCount: 0
})

export const actions = {
  async sendMail(context, value) {
    await this.$axios.$post('/api/profile/send', {
      name: value.name,
      email: value.email,
      message: value.message
    })
    context.commit('increment')
  }
}

export const mutations = {
  increment(state) {
    state.deliveryCount = state.deliveryCount + 1
  }
}

export const getters = {
  deliveryCount(state) {
    return state.deliveryCount
  }
}
