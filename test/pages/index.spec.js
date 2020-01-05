import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Vuex from 'vuex'
import index from '@/src/pages/index.vue'

describe('index', () => {
  lazy(
    'store',
    () =>
      new Vuex.Store({
        getters: {
          'portfolios/portfolios': () => lazy('portfolios'),
          'socials/socials': () => lazy('socials'),
          'skills/skills': () => lazy('skills'),
          'resumes/resumes': () => lazy('resumes')
        },
        actions: {
          'portfolios/showPortfolios': jest.fn(),
          'socials/showSocials': jest.fn(),
          'skills/showSkills': jest.fn(),
          'resumes/showResumes': jest.fn()
        }
      })
  )

  lazy('portfolios', () => null)
  lazy('socials', () => null)
  lazy('skills', () => null)
  lazy('resumes', () => null)

  lazy('component', () => mount(index, { store: lazy('store') }))

  test('Vueのインスタンスを返すこと', () => {
    expect(lazy('component').isVueInstance()).toBeTruthy()
  })

  describe('#sendMail', () => {
    lazy('form', () => ({
      name: 'saito',
      email: 'test@gmail.com',
      message: 'test'
    }))

    subject(() => {
      lazy('component').vm.sendMail(lazy('form'))
    })

    beforeEach(() => {
      lazy('component').vm.$store = {
        dispatch: jest.fn()
      }
    })

    test('sendMailが呼ばれること', () => {
      subject()
      expect(lazy('component').vm.$store.dispatch).toHaveBeenCalledWith(
        'mail/sendMail',
        lazy('form')
      )
    })
  })
})
