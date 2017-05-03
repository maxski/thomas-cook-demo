'use strict';

var page = require('./../actions.page.js');
var searchResults = require('./search.results.page.js');

/**
 * Represents search holidays form page
 */
module.exports = {
    SearchForm: {
        FlyingFromInput: {
            initial: $('[class*=initial] .ng-isolate-scope[model=origin]'),
            focused: $('[class*=initial] #SearchbarForm-origin')
        },
        WhereToInput: {
            initial: $('[class*=initial] .ng-isolate-scope[model=goingTo]'),
            focused: $('[class*=initial] #SearchbarForm-goingTo')
        },
        suggetionsSelect: '[class*=suggestions] ul li',
        WhenInput: {
            input: $('#when'),
            month: '.ui-datepicker-month',
            year: '.ui-datepicker-year',
            day: $$('[data-handler=selectDay] a')
        },
        durationSelect: '#SearchbarForm-duration',
        RoomSelects: {
            adult: '#SearchbarRooms-adults',
            children: '#SearchbarRooms-children',
            getRoomIndex: function(room) {
                return room - 1;
            },
            getSelectByRoom: function(room, prefix){ // format should be: '#SearchbarRooms-children0',
                return prefix + this.getRoomIndex(room);
            },
            ChildrenAge: {
                select: '#SearchbarChildAge-age',
                infantOption: '<2',
                childOption: '17',
                applyButton: $('#SearchbarChildAge-apply'),
                getSelect: function (roomIndex, childIndex, prefix) { // format should be: '#SearchbarChildAge-age0-0',
                    return prefix + roomIndex + '-' + childIndex;
                }
            }
        },
        searchButton: $('[class*=SearchbarForm-submitBtn]')
    },

    verifyOpened: function () {
        page.waitElementClickable(this.SearchForm.searchButton);
    },

    enterFlyingFrom: function(text) {
        this.clickFlyingFrom();
        this.enterTextFlyingFrom(text);
        this.selectSuggetion(text);
    },

    enterWhereTo: function(text) {
        this.clickWhereTo();
        this.enterTextWhereTo(text);
        this.selectSuggetion(text);
    },
    
    setDate: function (days) {
        this.openWhenCalendar();
        var date = new Date();
        date.setDate(date.getDate() + Number(days) + 1);
        this.setCalendarYear(date.getFullYear());
        this.setCalendarMonth(date.getMonth());
        browser.sleep(5000);
        this.clickCalendarDay(date.getDate());
    },

    selectRoom: function(room, adults, children, infants) {
        this.selectRoomAdults(room, adults);
        this.selectRoomChildren(room, children, infants);
    },

    selectDuration: function(text) {
        page.selectOption(this.SearchForm.durationSelect, text);
    },

    clickSearch: function() {
        page.click(this.SearchForm.searchButton);
        return searchResults;
    },

    clickFlyingFrom: function() {
        page.click(this.SearchForm.FlyingFromInput.initial);
    },

    clickWhereTo: function() {
        page.click(this.SearchForm.WhereToInput.initial);
    },

    enterTextFlyingFrom: function (text) {
        page.enterText(this.SearchForm.FlyingFromInput.focused, text);
    },

    enterTextWhereTo: function (text) {
        page.enterText(this.SearchForm.WhereToInput.focused, text);
    },

    selectSuggetion: function (text) {
        page.selectLi(this.SearchForm.suggetionsSelect, text);
    },

    openWhenCalendar: function () {
        page.click(this.SearchForm.WhenInput.input);
    },

    setCalendarYear: function (year) {
        page.selectOption(this.SearchForm.WhenInput.year, year);
    },

    setCalendarMonth: function (month) {
        page.selectOption(this.SearchForm.WhenInput.month, month);
    },

    clickCalendarDay: function (date) {
        var elements = this.SearchForm.WhenInput.day;
        var text;
        for (var i = 0; i < elements.length; i++) {
            text = elements.get(i).getText();
            if (text > date) break;
        }
        page.clickByIndex(elements, i);
    },

    selectRoomAdults: function (room, count) {
        var roomSelects = this.SearchForm.RoomSelects;
        var selectCss = roomSelects.getSelectByRoom(room, roomSelects.adult);
        page.selectOption(selectCss, count);
    },

    selectRoomChildren: function (room, children, infants) {
        var count = Number(children) + Number(infants);
        this.selectRoomChildrenCount(room, count);
        this.selectRoomChildrenAge(room, children, infants);
        this.applyRoomChildrenAge();
    },

    selectRoomChildrenCount: function (room, count) {
        var roomSelects = this.SearchForm.RoomSelects;
        var selectCss = roomSelects.getSelectByRoom(room, roomSelects.children);
        page.selectOption(selectCss, count);
    },

    selectRoomChildrenAge: function (room, children, infants) {
        var roomSelects = this.SearchForm.RoomSelects;
        var roomIndex = roomSelects.getRoomIndex(room);
        var childrenAge = roomSelects.ChildrenAge;
        var childCount = Number(children);
        var count = childCount + Number(infants);
        var select, option;
        for (var i = 0; i < count; i++, childCount--) {
            select = childrenAge.getSelect(roomIndex, i, childrenAge.select);
            option = (childCount > 0) ? childrenAge.childOption : childrenAge.infantOption;
            page.selectOption(select, option);
        }
    },

    applyRoomChildrenAge: function () {
        page.click(this.SearchForm.RoomSelects.ChildrenAge.applyButton);
    }

};