import axios            from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

export const AxiosMock = new AxiosMockAdapter(axios)

export const $axios = { }

const ORIGINAL_RESET_METHOD = AxiosMock.reset.bind(AxiosMock)
AxiosMock.reset = () => {
  ORIGINAL_RESET_METHOD()
  $axios.$get = async (...args) => (await axios.get(...args)).data
  $axios.$post = async (...args) => (await axios.post(...args)).data
  $axios.$put = async (...args) => (await axios.put(...args)).data
  $axios.$delete = async (...args) => (await axios.delete(...args)).data
}

export const AxiosMockPlugin = {
  install(Vue, options) {
    Vue.prototype.$axios = $axios
  },
}
