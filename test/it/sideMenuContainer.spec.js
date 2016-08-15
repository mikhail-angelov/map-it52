const chai = require('chai')
const expect = chai.expect

const React = require('react')
const ReactTestUtils = require('react-addons-test-utils')

const Provider = require('react-redux').Provider
const configureMockStore = require('redux-mock-store')
const mockStore = configureMockStore()

const SideMenu = require('../../src/components/sideMenu').default
const SideMenuContainer = require('../../src/containers/sideMenuContainer').default

describe('side menu', ()=>{

    it('should display Term input if store has isOpen true',()=>{
        
        const store = mockStore({
            sideMenu: {isOpen:true}
        });
        const component = ReactTestUtils.renderIntoDocument(
            <Provider store={store}><SideMenuContainer/></Provider>
        );
        var input = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'term')
        expect(!!input).to.be.true
    })

    it('should NOT display Term input if store has isOpen false',()=>{
        
        const store = mockStore({
            sideMenu: {isOpen:false}
        });
        const component = ReactTestUtils.renderIntoDocument(
            <Provider store={store}><SideMenuContainer/></Provider>
        );
        var inputs = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'term');
        expect(inputs[0]).to.be.undefined;
    })

})