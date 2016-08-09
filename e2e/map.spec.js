const webdriver = require('selenium-webdriver');

const driver = require('./main');
const sideMenu = require('./pageObject/sideMenu')(driver);
const detailsView = require('./pageObject/detailsView')(driver);
const By = webdriver.By;
const until = webdriver.until;
const chai = require('chai');
const expect = chai.expect;

describe('map', () => {

    beforeEach(()=> driver.navigate().to('http://localhost:3000'));
    after(()=>driver.quit());

    it('should search stuff', function* () {

        sideMenu.isDisplayed()
        sideMenu.searchIcon().click()
        sideMenu.isOpen()
        sideMenu.searchFor('MERA')

        expect(yield sideMenu.resultItems().then(list=>list.length)).to.equal(1);
        expect(yield sideMenu.resultItems().then(list=>list[0].getText())).to.equal('MERA');
    });

    it('should show detail view on click', function* () {

        sideMenu.isDisplayed()
        sideMenu.searchIcon().click()
        driver.sleep(1000)
        sideMenu.isOpen()
        sideMenu.searchFor('MERA')
        driver.sleep(1000)
        sideMenu.resultItems().then(list=>list[0].click())
        
        detailsView.isDisplayed()
        driver.sleep(1500)
        expect(yield detailsView.isDisplayed()).to.be.true;
    });


});

