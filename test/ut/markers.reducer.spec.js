const chai = require('chai')
const expect = chai.expect
const reducer = require('../../src/reducers/markers').default
const actions = require('../../src/actions');

describe('marker reducer',()=>{

    it('should ignore dummy action',()=>{
        const oldState = 'test'
        const state = reducer(oldState,{type:'BLA-BLA'})
        expect(state).to.equal(oldState)
    })

    it('should handle SEARCH action',()=>{
        const TERM = 'MERA'
        const action = actions.search(TERM)
        const state = reducer(undefined,action)

        expect(state.length).to.equal(1)
        expect(state[0].name).to.equal(TERM)
    })

    it('should handle TOGGLE_SIDEMENU action',()=>{
        const action = actions.toggleSideMenu()
        const state = reducer(undefined,action)

        expect(state.length > 10).to.equal(true)
    })
})