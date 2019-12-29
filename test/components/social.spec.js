import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Social from '@/src/components/social.vue'

describe('Social', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Social)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
