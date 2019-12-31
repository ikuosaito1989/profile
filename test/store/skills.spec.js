import '@/test/spec_helper.js'
import Vuex from 'vuex'
import {
  AxiosMock,
  $axios
} from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import { state, actions, getters, mutations } from '@/src/store/skills.js'

describe('skills', () => {
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

  lazy('mockSkills', () => require('@/test/fixtures/skills.json'))

  test('Storeのインスタンスが生成されること', () => {
    expect(lazy('store') instanceof Vuex.Store).toBeTruthy()
  })

  describe('Action', () => {
    describe('showSkills', () => {
      subject(() => actions.showSkills.bind({ $axios })(lazy('context')))

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onGet('/api/profile/skills').reply(200, lazy('mockSkills'))
      })

      test('サーバーに問合せ後、状態がコミットされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith('setSkills', {
          skills: lazy('mockSkills')
        })
      })
    })
  })

  describe('Getter', () => {
    describe('skills', () => {
      subject(() => getters.skills(lazy('mockState')))

      lazy('mockState', () => ({
        skills: lazy('mockSkills')
      }))

      test('socialが返ること', () => {
        expect(subject()).toBe(lazy('mockSkills'))
      })
    })
  })

  describe('Mutation', () => {
    describe('skills', () => {
      lazy('mockState', () => state())
      subject(() =>
        mutations.setSkills(lazy('mockState'), {
          skills: lazy('mockSkills')
        })
      )

      test('ジョブが state にセットされること', () => {
        subject()
        expect(lazy('mockState').skills).toBe(lazy('mockSkills'))
      })
    })
  })
})
