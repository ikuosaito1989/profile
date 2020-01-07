import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Vuex from 'vuex'
import _id from '@/src/pages/portfolio/_id.vue'

describe('_id', () => {
  const store = new Vuex.Store({
    getters: {
      'portfolios/selectedPortfolio': () =>
        require('@/test/fixtures/portfolios.json')[0]
    },
    actions: {
      'portfolios/selectPortfolio': jest.fn()
    }
  })
  store.dispatch = jest.fn()
  context = {
    store,
    params: { id: 1 }
  }
  const wrapper = mount(_id, { store })

  test('Vueのインスタンスを返すこと', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('selectPortfolioが呼ばれること', () => {
    _id.fetch(context)
    expect(
      context.store.dispatch
    ).toHaveBeenCalledWith('portfolios/selectPortfolio', { portfolioId: 1 })
  })
})
