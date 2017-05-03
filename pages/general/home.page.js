'use strict';

var page = require('./../actions.page.js');
var searchForm = require('./../holidays/search.form.page');
var cookiesPanel = require('./cookies.page.js');

/**
 * Represents Home page
 */
module.exports = {
    HomePage: {

    },

    verifyOpened: function () {
        cookiesPanel.acceptCookies();
        /*
            other verifications there
         */
        searchForm.verifyOpened();
        return this;
    },

    getSearchForm: function () {
        return searchForm;
    }

};