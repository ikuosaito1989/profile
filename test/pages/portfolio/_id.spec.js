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

  const $route = {
    params: { id: 1 }
  }

  const wrapper = mount(_id, {
    store,
    mocks: {
      $route
    }
  })

  test('Vueのインスタンスを返すこと', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('selectPortfolioが呼ばれること', () => {
    expect(
      wrapper.vm.$store.dispatch
    ).toHaveBeenCalledWith('portfolios/selectPortfolio', { portfolioId: 1 })
  })
})
