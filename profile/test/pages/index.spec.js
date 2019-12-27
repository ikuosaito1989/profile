import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { AxiosMock } from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import index from '@/pages/index.vue'

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
    AxiosMock.onGet('/api/profile/portfolios').reply(
      200,
      require('@/test/fixtures/portfolios.json')
    )
  })

  test('Vueのインスタンスを返すこと', () => {
    expect(lazy('component').isVueInstance()).toBeTruthy()
  })
})
