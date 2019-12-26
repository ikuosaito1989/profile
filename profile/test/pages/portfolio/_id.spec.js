import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import _id from '@/pages/portfolio/_id.vue'

describe('_id', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(_id)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
