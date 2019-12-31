import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Portfolio from '@/src/components/portfolio'

describe('Portfolio', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Portfolio)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
