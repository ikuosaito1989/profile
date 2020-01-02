import '@/test/spec_helper.js'
import Vuex from 'vuex'
import {
  AxiosMock,
  $axios
} from '@/test/spec_helpers/nuxt_axios_mock_adapter.js'
import { state, actions, getters, mutations } from '@/src/store/resumes.js'

describe('resumes', () => {
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

  lazy('mockResumes', () => require('@/test/fixtures/resumes.json'))

  test('Store instance is generated', () => {
    expect(lazy('store') instanceof Vuex.Store).toBeTruthy()
  })

  describe('Action', () => {
    describe('showResumes', () => {
      subject(() => actions.showResumes.bind({ $axios })(lazy('context')))

      lazy('context', () => ({
        commit: jest.fn()
      }))

      beforeEach(() => {
        AxiosMock.onGet('/api/profile/resumes').reply(200, lazy('mockResumes'))
      })

      test('サーバーに問合せ後、状態がコミットされること', async () => {
        await subject()
        expect(lazy('context').commit).toHaveBeenCalledWith('setResumes', {
          resumes: lazy('mockResumes')
        })
      })
    })
  })

  describe('Getter', () => {
    describe('resumes', () => {
      subject(() => getters.resumes(lazy('mockState')))

      lazy('mockState', () => ({
        resumes: lazy('mockResumes')
      }))

      test('職務経歴が返ること', () => {
        expect(subject()).toBe(lazy('mockResumes'))
      })
    })
  })

  describe('Mutation', () => {
    describe('resumes', () => {
      lazy('mockState', () => state())
      subject(() =>
        mutations.setResumes(lazy('mockState'), {
          resumes: lazy('mockResumes')
        })
      )

      test('ジョブが state にセットされること', () => {
        subject()
        expect(lazy('mockState').resumes).toBe(lazy('mockResumes'))
      })
    })
  })
})
