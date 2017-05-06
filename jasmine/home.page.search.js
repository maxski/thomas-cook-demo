var page = require('./../pages/actions.page.js');
var homePage = require('./../pages/general/home.page');
var searchForm;
var searchResults;

/**
 * Do search using parameters
 */
describe('Home page search using parameters provided', function() {

    it('Given I am a customer on the Homepage', function() {
        page.open(browser.baseUrl);
        homePage.verifyOpened();
    });

    it('And I have the following search preferences', function() {
        searchForm = homePage.getSearchForm();
    });

    it('And From: Any London To: Turkey, Any', function() {
        var from = 'Any London';
        var whereTo = 'Turkey, Any';
        searchForm.enterFlyingFrom(from);
        searchForm.enterWhereTo(whereTo);
    });

    it('And Days to Departure: > 200 days ', function() {
        var days = 200;
        searchForm.setDate(days);
    });
    it('And Duration: I don\'t mind', function() {
        var duration = 'I don\'t mind';
        searchForm.selectDuration(duration);
    });

    it('And Room 1: 2 Adults, 1 Child, 1 Infant', function() {
        var adults = 2;
        var room = 1;
        var children = 1;
        var infant = 1;
        searchForm.selectRoom(room , adults, children, infant);
    });

    it('I search using the above preferences', function() {
        searchResults = searchForm.clickSearch();
    });

    it('Then the search results page displays results', function() {
        searchResults.verifyOpened();
    });

});