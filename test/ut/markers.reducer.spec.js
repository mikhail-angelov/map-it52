const chai = require('chai')
const expect = chai.expect
const reducer = require('../../src/reducers/markers').default


describe('marker reducer',()=>{

    it('should ignore dummy action',()=>{
        const state = reducer('test',{type:'BLA-BLA'})
        expect(state).to.equal('test')
    })

    it('should handle SEARCH action',()=>{
        const state = reducer(undefined,{type:'SEARCH', term:'MERA'})

        expect(state.length).to.equal(1)
        expect(state[0].name).to.equal('MERA')
    })

    it('should handle TOGGLE_SIDEMENU action',()=>{
        const state = reducer(undefined,{type:'TOGGLE_SIDEMENU'})

        expect(state.length > 10).to.equal(true)
    })
})