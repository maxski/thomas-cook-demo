'use strict';

/**
 * Doesn't represent any page,
 * but contains methods that are general to all pages
 */
module.exports = {
    elementTimeOut: 20000,

    open: function(site) {
        browser.manage().window().maximize();
        this.log('Open page', site);
        return browser.get(site);
    },

    waitElementClickable: function (element, timeout) {
        timeout = timeout || this.elementTimeOut;
        var ec = protractor.ExpectedConditions;
        this.log('Wait element is clickable', element.locator());
        browser.wait(ec.elementToBeClickable(element), timeout);
    },

    waitElementVisible: function (element, timeout) {
        var ec = protractor.ExpectedConditions;
        this.log('Wait element is visible', element.locator());
        browser.wait(ec.visibilityOf(element), timeout);
    },

    selectOption: function (select, label) {
        var option = select + ' option[label*="text"]'; // by label
        option += ',' + select + ' option[value*="text"]'; // by value
        option = option.replace(/text/g, label);
        this.log('Select option', option);
        element(by.css(option)).click();
    },

    selectLi: function (li, text) {
        this.log('Select li by text [' + text + '] from elements:' + li);
        element(by.cssContainingText(li, text)).click();
    },


    click: function (element) {
        this.log('Click element', element.locator());
        element.click();
    },

    clickByIndex: function (elements, index) {
        this.log('Click by index [' + index + '] elements', elements.locator());
        elements.get(index).click();
    },

    enterText: function (element, text) {
        this.log('Enter text to element', element.locator());
        element.sendKeys(text);
    },

    log: function (message, locator) {
        console.log("[Page Action] " + message + ": " + locator);
    }

};