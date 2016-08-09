const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;


module.exports = function(driver) {
    const elements = {
        main: By.css('.details'),
        // searchText: By.css('.term'),
        // resultList: By.css('.results'),
        // resultItems: By.css('.resultItem'),
    };
    return {
        // searchIcon: ()=>driver.findElement(elements.searchIcon),
        // searchText: ()=>driver.findElement(elements.searchText),
        // resultList: ()=>driver.findElement(elements.resultList),
        // resultItems: ()=>driver.findElements(elements.resultItems),
        isDisplayed: ()=>driver.isElementPresent(elements.main),
        // isOpen: ()=>driver.wait(until.elementLocated(elements.searchText)),
        // isClosed: ()=>driver.wait(until.elementIsNotVisible(elements.searchText)),
        // searchFor: (value) => driver.findElement(elements.searchText).sendKeys(value)
    };
};