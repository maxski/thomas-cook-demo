'use strict';

var page = require('./../actions.page.js');

/**
 * Represents cookies panel page
 */
module.exports = {
    CookiesPage: {
        acceptButton: $('#accept-cookies')
    },

    acceptCookies: function () {
        page.click(this.CookiesPage.acceptButton);
    }

};


