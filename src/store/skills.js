export const state = () => ({
  skills: undefined
})

export const actions = {
  async showSkills(context) {
    const skills = await this.$axios.$get('/api/profile/skills')
    context.commit('setSkills', { skills })
  }
}

export const mutations = {
  setSkills(state, { skills }) {
    state.skills = skills
  }
}

export const getters = {
  skills(state) {
    return state.skills
  }
}
