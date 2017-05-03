'use strict';

var page = require('./../actions.page.js');

/**
 * Represents search holidays results page
 */
module.exports = {
    SearchResults: {
        holidaysCount: $('#test-holiday-total')
    },

    verifyOpened: function () {
        page.waitElementVisible(this.SearchResults.holidaysCount);
        // other verifications there
    }

};
