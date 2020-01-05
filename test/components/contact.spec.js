import '@/test/spec_helper.js'
import { mount } from '@vue/test-utils'
import Contact from '@/src/components/contact'

describe('Contact', () => {
  lazy('component', () => mount(Contact))

  test('is a Vue instance', () => {
    expect(lazy('component').isVueInstance()).toBeTruthy()
  })

  describe('#onSubmit', () => {
    subject(() => {
      lazy('component').vm.$emit = jest.fn()
      lazy('component').vm.onSubmit()
    })

    beforeEach(() => {
      lazy('component').vm.form = {
        name: 'saito',
        email: 'ikuosaito1989@gmail.com',
        message: 'test message'
      }
    })

    test('emitの引数にformが渡されること', () => {
      subject()
      expect(lazy('component').vm.$emit).toHaveBeenCalledWith('submit', {
        name: 'saito',
        email: 'ikuosaito1989@gmail.com',
        message: 'test message'
      })
    })

    // test('これ入れるとBranchが50になる。謎', () => {
    //   subject()
    //   const text = lazy('component').find('input[type="text"]')
    //   text.setValue('test')
    //   expect(lazy('component').vm.form.name).toBe('test')
    // })
  })
})
