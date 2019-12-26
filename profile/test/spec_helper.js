import Vue                               from 'vue'
import Vuex                              from 'vuex'
import LazyVariableHelper                from '@/test/spec_helpers/lazy_variable_helper'
import { AxiosMock, AxiosMockPlugin }    from '@/test/spec_helpers/nuxt_axios_mock_adapter'
// import { Carousel, Slide }               from 'vue-carousel'
import { RouterLinkStub }                from '@vue/test-utils'
// import { Validator, ValidationProvider } from 'vee-validate'
// import { Datetime }                      from 'vue-datetime'
// import { MonthlyPicker }                 from 'vue-monthly-picker'
// import { Paginate }                      from 'vuejs-paginate'

// Vuexを使用する
Vue.use(Vuex)

// // VueCarouselを使用する
// Vue.component('VueCarouselCarousel', Carousel)
// Vue.component('VueCarouselSlide', Slide)

// // VeeValidateを使用する
// Vue.component('ValidationProvider', ValidationProvider)
// for (const name of ['name', 'name_kana', 'phone_number']) {
//   Validator.extend(name, require(`@/validators/${name}_validator.js`).default)
// }

// // VueDatetimeを使用する(スタブ化)
// Vue.component('VueDatetime', Datetime)

// // VueMonthlyPickerを使用する(スタブ化)
// Vue.component('VueMonthlyPicker', MonthlyPicker)

// // VuePaginateを使用する(スタブ化)
// Vue.component('VuePaginate', Paginate)

// NuxtLinkを使用する(スタブ化)
Vue.component('n-link', RouterLinkStub)

// NuxtAxiosModuleを使用する(モック化)
Vue.use(AxiosMockPlugin)

// contextを使えるようにする
global.context = global.describe

// lazy, subject を使えるようにする
// @note これ最高なので後でライブラリにする
global.lazy = LazyVariableHelper.lazy
global.subject = (func) => lazy('subject', func)

// Vueの警告を非表示にする
Vue.config.silent = true

// // 環境変数の上書き
// process.env.APP_URL = 'http://localhost:2525'

beforeEach(() => {
  AxiosMock.reset()
  localStorage.clear()
  global.alert = jest.fn()
  LazyVariableHelper.reset()
  process.browser = false
})
