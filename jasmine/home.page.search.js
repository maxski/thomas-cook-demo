var page = require('./../pages/actions.page.js');
var homePage = require('./../pages/general/home.page');
var searchForm;
var searchResults;

/**
 * Do search using parameters
 */
describe('Home page search using parameters provided', function() {

    it('Given I am a customer on the Homepage', function() {
        page.open('https://www.thomascook.com/');
        homePage.verifyOpened();
    });

    it('And I have the following search preferences', function() {
        searchForm = homePage.getSearchForm();
    });

    it('And From: Any London To: Turkey, Any', function() {
        searchForm.enterFlyingFrom('Any London');
        searchForm.enterWhereTo('Turkey, Any');
    });

    it('And Days to Departure: > 200 days ', function() {
        searchForm.setDate('200');
    });

    it('And Duration: I don\'t mind', function() {
        searchForm.selectDuration('I don\'t mind');
    });

    it('And Room 1: 2 Adults, 1 Child, 1 Infant', function() {
        searchForm.selectRoom('1', '2', '1', '1');
    });

    it('I search using the above preferences', function() {
        searchResults = searchForm.clickSearch();
    });

    it('Then the search results page displays results', function() {
        searchResults.verifyOpened();
    });

});