import '@/test/spec_helper.js'
import Vuex from 'vuex'
import {
  AxiosMock,
  $axios
} from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import { state, actions, getters, mutations } from '@/src/store/mail.js'

describe('mail', () => {
  lazy(
    'store',
    () =>
      new Vuex.Store({
        state,
        actions,
        getters,
        mutations
      })
  )

  test('Store instance is generated', () => {
    expect(lazy('store') instanceof Vuex.Store).toBeTruthy()
  })

  describe('Action', () => {
    describe('sendMail', () => {
      subject(() =>
        actions.sendMail.bind({ $axios })(lazy('context'), lazy('value'))
      )

      lazy('value', () => ({
        name: 'saito',
        email: 'test@gmail.com',
        message: 'test'
      }))

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onPost('/api/profile/send', {
          name: 'saito',
          email: 'test@gmail.com',
          message: 'test'
        }).reply(200)
      })

      test('サーバーに問合せ後、送信数がカウントされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith('increment')
      })
    })
  })

  describe('Mutation', () => {
    describe('mail', () => {
      lazy('mockState', () => state())
      subject(() => mutations.increment(lazy('mockState')))

      test('deliveryCountがincrementされていること', () => {
        lazy('mockState').deliveryCount = 2
        subject()
        expect(lazy('mockState').deliveryCount).toBe(3)
      })
    })
  })

  describe('Getter', () => {
    describe('deliveryCount', () => {
      subject(() => getters.deliveryCount(lazy('mockState')))

      lazy('mockState', () => ({
        deliveryCount: 2
      }))

      test('deliveryCountが返ること', () => {
        expect(subject()).toBe(2)
      })
    })
  })
})
