import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import { AxiosMock } from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import index from '@/pages/index.vue'
import Vuex from 'vuex'

describe('index', () => {
  lazy(
    'store',
    () =>
      new Vuex.Store({
        getters: {
          'portfolios/portfolios': () => lazy('portfolios')
        },
        actions: {
          'portfolios/getPortfolios': jest.fn()
        }
      })
  )

  lazy('portfolios', () => null)

  lazy('component', () => mount(index, { store: lazy('store') }))

  beforeEach(() => {
    AxiosMock.onGet('profile/portfolios').reply(
      200,
      require('@/test/fixtures/portfolios.json')
    )
  })

  test('Vueのインスタンスを返すこと', () => {
    expect(lazy('component').isVueInstance()).toBeTruthy()
  })
})
