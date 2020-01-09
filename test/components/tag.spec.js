import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Tag from '@/src/components/tag'

describe('Tag', () => {
  const wrapper = mount(Tag, {
    propsData: {
      name: 'test'
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('keywordSearchPath', () => {
    test('urlが正しく返ること', () => {
      expect(wrapper.vm.keywordSearchPath).toBe(
        'https://www.google.com/search?q=test'
      )
    })
  })
})
