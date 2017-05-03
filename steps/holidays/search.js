'use strict';

var page = require('./../../pages/actions.page.js');
var homePage = require('./../../pages/general/home.page.js');
var searchForm;
var searchResults;

/**
 * Steps for holidays search from Home page
 */
var steps = function() {
    this.Given(/^I am a customer on the Homepage "([^"]*)"$/, function(site) {
        page.open(site);
        homePage.verifyOpened();
    });

    this.Given(/^I have the following search preferences$/, function () {
        searchForm = homePage.getSearchForm();
    });

    this.Given(/^From: ([^"]*) To: ([^"]*)$/, function (from, to) {
        searchForm.enterFlyingFrom(from);
        searchForm.enterWhereTo(to);
    });

    this.Given(/^Days to Departure: > (\d+) days$/, function (days) {
        searchForm.setDate(days);
    });

    this.Given(/^Duration: ([^"]*)$/, function (duration) {
        searchForm.selectDuration(duration);
    });

    this.Given(/^Room (\d+): (\d+) Adults, (\d+) Child, (\d+) Infant$/, function (room, adults, children, infants) {
        searchForm.selectRoom(room, adults, children, infants);
    });

    this.When(/^I search using the above preferences$/, function () {
        searchResults = searchForm.clickSearch();
    });

    this.Then(/^the search results page displays results$/, function () {
        searchResults.verifyOpened();
    });
};

module.exports = steps;
