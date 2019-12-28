import '@/test/spec_helper.js'
import Vuex from 'vuex'
import {
  AxiosMock,
  $axios
} from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import { state, actions, getters, mutations } from '@/store/socials.js'

describe('socials', () => {
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

  lazy('mockSocials', () => require('@/test/fixtures/socials.json'))

  test('Storeのインスタンスが生成されること', () => {
    expect(lazy('store') instanceof Vuex.Store).toBeTruthy()
  })

  describe('Action', () => {
    describe('showSocials', () => {
      subject(() => actions.showSocials.bind({ $axios })(lazy('context')))

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onGet('/api/profile/socials').reply(
          200,
          lazy('mockSocials')
        )
      })

      test('サーバーに問合せ後、状態がコミットされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith('setSocials', {
          socials: lazy('mockSocials')
        })
      })
    })
  })

  describe('Getter', () => {
    describe('socials', () => {
      subject(() => getters.socials(lazy('mockState')))

      lazy('mockState', () => ({
        socials: lazy('mockSocials')
      }))

      test('socialが返ること', () => {
        expect(subject()).toBe(lazy('mockSocials'))
      })
    })
  })

  describe('Mutation', () => {
    describe('socials', () => {
      lazy('mockState', () => state())
      subject(() =>
        mutations.setSocials(lazy('mockState'), {
          socials: lazy('mockSocials')
        })
      )

      test('ジョブが state にセットされること', () => {
        subject()
        expect(lazy('mockState').socials).toBe(lazy('mockSocials'))
      })
    })
  })
})
