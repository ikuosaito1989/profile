import '@/test/spec_helper.js'
import Vuex from 'vuex'
import {
  AxiosMock,
  $axios
} from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import { state, actions, getters, mutations } from '@/src/store/portfolios.js'

describe('portfolios', () => {
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

  lazy('mockPortfolios', () => require('@/test/fixtures/portfolios.json'))

  test('Store instance is generated', () => {
    expect(lazy('store') instanceof Vuex.Store).toBeTruthy()
  })

  describe('Action', () => {
    describe('getPortfolios', () => {
      subject(() => actions.getPortfolios.bind({ $axios })(lazy('context')))

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onGet('/api/profile/portfolios').reply(
          200,
          lazy('mockPortfolios')
        )
      })

      test('サーバーに問合せ後、状態がコミットされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith('setPortfolios', {
          portfolios: lazy('mockPortfolios')
        })
      })
    })
  })

  describe('Getter', () => {
    describe('portfolios', () => {
      subject(() => getters.portfolios(lazy('mockState')))

      lazy('mockState', () => ({
        portfolios: lazy('mockPortfolios')
      }))

      test('ポートフォリオが返ること', () => {
        expect(subject()).toBe(lazy('mockPortfolios'))
      })
    })
  })

  describe('Mutation', () => {
    describe('portfolios', () => {
      lazy('mockState', () => state())
      subject(() =>
        mutations.setPortfolios(lazy('mockState'), {
          portfolios: lazy('mockPortfolios')
        })
      )

      test('ジョブが state にセットされること', () => {
        subject()
        expect(lazy('mockState').portfolios).toBe(lazy('mockPortfolios'))
      })
    })
  })
})
