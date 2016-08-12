const configureMockStore = require('redux-mock-store');
const thunk = require('redux-thunk').default;
const actions = require('../../src/actions');
const nock = require('nock');
const chai = require('chai')
const expect = chai.expect

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_DETAIL_INFO when fetching todos has been done', () => {
    const TEST_URL = 'http://example.com/'
    const MARKER_ID = 'new'
    nock(TEST_URL)
      .get('/')
      .reply(200, { id: 'test', data: 'test' })

    const expectedActions = [
      {
        type: 'REQUEST_DETAIL_INFO', marker: {
          id: MARKER_ID,
          url: TEST_URL
        }
      },
      {
        type: 'RECEIVE_DETAIL_INFO', 
        marker: {
          id: MARKER_ID,
          url: TEST_URL
        },
        info: {
          id: 'test',
          data: 'test'
        }
      }
    ]
    const store = mockStore({ detailsInfo: { marker: { id: 'old' } } })

    return store.dispatch(actions.fetchDetailInfoIfNeeded({ id: MARKER_ID, url: TEST_URL }))
      .then(() => { // return of async actions
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  })
})