import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Resume from '@/src/components/resume'

describe('Resume', () => {
  lazy('component', () =>
    mount(Resume, {
      propsData: {
        id: 1,
        company: '〇〇株式会社',
        enrollmentPeriod: {
          from: '2015/05/01',
          to: lazy('to')
        },
        jobDescription: '',
        deliverables: lazy('deliverables')
      }
    })
  )

  lazy('to', () => '2015/05/01')
  lazy('deliverables', () => [])

  test('is a Vue instance', () => {
    expect(lazy('component').isVueInstance()).toBeTruthy()
  })

  context('toがnullのとき', () => {
    lazy('to', () => null)
    test('現在までの在籍期間が表示される', () => {
      expect(lazy('component').vm.convertPeriod).toBe('2015/05/01 ~ 現在')
    })
  })

  context('deliverablesがnullのとき', () => {
    lazy('deliverables', () => null)
    test('成果物が表示されない', () => {
      expect(
        lazy('component')
          .text()
          .includes('成果物')
      ).toBeFalsy()
    })
  })
})
