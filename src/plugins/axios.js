export default function({ $axios, redirect, error }) {
  $axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    // ref. https://axios.nuxtjs.org/helpers
    // redirect(code, '')
    error({ statusCode: code })
  })
}
