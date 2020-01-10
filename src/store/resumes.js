export const state = () => ({
  resumes: undefined
})

export const actions = {
  async showResumes(context) {
    const resumes = await this.$axios.$get('/api/profile/resumes')
    context.commit('setResumes', { resumes })
  }
}

export const mutations = {
  setResumes(state, { resumes }) {
    state.resumes = resumes
  }
}

export const getters = {
  resumes(state) {
    return state.resumes
  }
}
