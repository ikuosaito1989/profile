import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Skill from '@/src/components/skill'

describe('Skill', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Skill)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
