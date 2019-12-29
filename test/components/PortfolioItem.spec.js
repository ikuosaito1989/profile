import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import PortfolioItem from '@/src/components/PortfolioItem.vue'

describe('PortfolioItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PortfolioItem)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
