const chai = require('chai')
const expect = chai.expect

const React = require('react')
const ReactTestUtils = require('react-addons-test-utils')

const SideMenu = require('../../src/components/sideMenu').default

describe('side menu', ()=>{
    
    it('should not display Term input if it closed',(done)=>{
        
        const component = ReactTestUtils.renderIntoDocument(
            // <SideMenu isOpen={false} onToggle={onClick} /> - does not work for stateless components
            SideMenu({isOpen:false, onToggle:onClick})
        );

        expect(ReactTestUtils.isCompositeComponent(component)).to.be.true;
        const icon = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'searchIcon');
        
        ReactTestUtils.Simulate.click(icon)

        var inputs = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'term');

        expect(inputs[0]).to.be.undefined;

        function onClick(){
            done()
        }
    })

    it('should show Term input if it open',()=>{
        
        const component = ReactTestUtils.renderIntoDocument(
            SideMenu({isOpen:true})
        );
        var input = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'term');

        expect(!!input).to.be.true;
    })
})